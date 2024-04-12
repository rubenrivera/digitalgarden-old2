---
{"dg-publish":true,"permalink":"/es/examples/alternate-checkboxes/","title":"Casillas de Verificación Alternativas","tags":["labs"]}
---


# Casillas de Verificación Alternativas

De https://minimal.guide/checklists, tomado el 5 de abril de 2024.

<table lang="en">
<tr><th>Syntax  </th><th> Description </th></tr>
<tr><td><code>- [ ]</code></td><td> to-do       </td></tr>
<tr><td><code>- [/]</code></td><td> incomplete  </td></tr>
<tr><td><code>- [x]</code></td><td> done        </td></tr>
<tr><td><code>- [-]</code></td><td> canceled    </td></tr>
<tr><td><code>- [>]</code></td><td> forwarded   </td></tr>
<tr><td><code>- [<]</code></td><td> scheduling  </td></tr>
<tr><td><code>- [?]</code></td><td> question    </td></tr>
<tr><td><code>- [!]</code></td><td> important   </td></tr>
<tr><td><code>- [*]</code></td><td> star        </td></tr>
<tr><td><code>- ["]</code></td><td> quote       </td></tr>
<tr><td><code>- [l]</code></td><td> location    </td></tr>
<tr><td><code>- [b]</code></td><td> bookmark    </td></tr>
<tr><td><code>- [i]</code></td><td> information </td></tr>
<tr><td><code>- [S]</code></td><td> savings     </td></tr>
<tr><td><code>- [I]</code></td><td> idea        </td></tr>
<tr><td><code>- [p]</code></td><td> pros        </td></tr>
<tr><td><code>- [c]</code></td><td> cons        </td></tr>
<tr><td><code>- [f]</code></td><td> fire        </td></tr>
<tr><td><code>- [k]</code></td><td> key         </td></tr>
<tr><td><code>- [w]</code></td><td> win         </td></tr>
<tr><td><code>- [u]</code></td><td> up          </td></tr>
<tr><td><code>- [d]</code></td><td> down        </td></tr>
</table>

## Expresión Regular

```js
/^\[([\/\-><\?!\*"ilbSIpcfkwud])\][  ]/
```

## Comprobación

 - [ ]   to-do       
 - [/]   incomplete  
 - [x]   done        
 - [-]   canceled    
 - [>]   forwarded   
 - [<]   scheduling  
 - [?]   question    
 - [!]   important   
 - [*]   star        
 - ["]   quote       
 - [l]   location    
 - [b]   bookmark    
 - [i]   information 
 - [S]   savings     
 - [I]   idea        
 - [p]   pros        
 - [c]   cons        
 - [f]   fire        
 - [k]   key         
 - [w]   win         
 - [u]   up          
 - [d]   down        

## Así luce en Obsidian

Tema: Minimal
Tema Base: Obscuro


![Pasted image 20240406125728.png](/img/user/Pasted%20image%2020240406125728.png)
# Relacionado

- [# Alternate checkboxes using userSetup.js #576](https://github.com/oleeskild/obsidian-digital-garden/discussions/576)
- https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Alternate-Checkboxes.md