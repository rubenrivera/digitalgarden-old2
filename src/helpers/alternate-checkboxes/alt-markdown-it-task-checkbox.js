// Markdown-it plugin to render GitHub-style task lists; see
//
// https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments
// https://github.com/blog/1825-task-lists-in-all-markdown-documents


module.exports = function (md, options) {

	var defaults;
	defaults = {
		disabled: true,
		divWrap: false,
		divClass: 'checkbox',
		idPrefix: 'cbx_',
		ulClass: 'task-list',
		liClass: 'task-list-item'
	};
	options = Object.assign({}, defaults, options);
	//console.log(options.altCheckboxes);
	md.core.ruler.after('inline', 'github-task-lists', function (state) {
		var tokens = state.tokens;
		var lastId = 0;
		for (var i = 2; i < tokens.length; i++) {

			if (isTodoItem(tokens, i, options)) {
				todoify(tokens[i], lastId, options, state.Token);
				const regex = options.altCheckboxes.regex;
				const value = tokens[i].content.match(regex)[1]
				//console.log(i, value, tokens[i].content);
				lastId += 1;
				attrSet(tokens[i - 2], 'class', options.liClass);
				attrSet(tokens[i - 2], 'data-task', value);								
				attrSet(tokens[parentToken(tokens, i - 2)], 'class', options.ulClass);
				//console.log(i - 2, tokens[i - 2])
				
			}
		}
	});
};

function attrSet(token, name, value) {
	var index = token.attrIndex(name);
	var attr = [name, value];

	if (index < 0) {
		token.attrPush(attr);
	} else {
		token.attrs[index] = attr;
	}
}


function parentToken(tokens, index) {
	var targetLevel = tokens[index].level - 1;
	for (var i = index - 1; i >= 0; i--) {
		if (tokens[i].level === targetLevel) {
			return i;
		}
	}
	return -1;
}

function isTodoItem(tokens, index, options) {
	return isInline(tokens[index]) &&
		isParagraph(tokens[index - 1]) &&
		isListItem(tokens[index - 2]) &&
		startsWithTodoMarkdown(tokens[index], options.altCheckboxes.regex);
}

function todoify(token, lastId, options, TokenConstructor) {
	var id;
	id = options.idPrefix + lastId
	token.children[0].content = token.children[0].content.slice(3);
	// label
	token.children.unshift(beginLabel(id, TokenConstructor));
	token.children.push(endLabel(TokenConstructor));
	// checkbox
	token.children.unshift(makeCheckbox(token, id, options, TokenConstructor));
	if (options.divWrap) {
		token.children.unshift(beginWrap(options, TokenConstructor));
		token.children.push(endWrap(TokenConstructor));
	}
}

function makeCheckbox(token, id, options, TokenConstructor) {
	var checkbox = new TokenConstructor('checkbox_input', 'input', 0);
	checkbox.attrs = [["type", "checkbox"], ["id", id]];
	// if token.content starts with '[x] ' or '[X] '
	const value = token.content.slice(1,2);
	const spec = options.altCheckboxes.values.find(arr => arr[0] === value);
	//console.log(token.content, ' --> ', value, spec);
	
	var checked = spec[1]; 
	if (checked === true) {
		checkbox.attrs.push(["checked", "true"]);
		checkbox.attrs.push(["data-task", value]);
	}
	
	if (options.disabled === true) {
		checkbox.attrs.push(["disabled", "true"]);
	}
	//console.log(checkbox);
	return checkbox;
}

function beginLabel(id, TokenConstructor) {
	var label = new TokenConstructor('label_open', 'label', 1);
	label.attrs = [["for", id]];
	return label;
}

function endLabel(TokenConstructor) {
	return new TokenConstructor("label_close", "label", -1);
}

// these next two functions are kind of hacky; probably should really be a
// true block-level token with .tag=='label'
function beginWrap(options, TokenConstructor) {
	var token = new TokenConstructor('checkbox_open', 'div', 0);
	token.attrs = [["class", options.divClass]];
	return token;
}

function endWrap(TokenConstructor) {
	var token = new TokenConstructor('checkbox_close', 'div', -1);
	// token.content = '</label>';
	return token;
}

function isInline(token) { return token.type === 'inline'; }
function isParagraph(token) { return token.type === 'paragraph_open'; }
function isListItem(token) { return token.type === 'list_item_open'; }

function startsWithTodoMarkdown(token, regex) {
	// The leading whitespace in a list item (token.content) is already trimmed off by markdown-it.
	// The regex below checks for '[ ] ' or '[x] ' or '[X] ' at the start of the string token.content,
	// where the space is either a normal space or a non-breaking space (character 160 = \u00A0).
	return regex.test(token.content);
}