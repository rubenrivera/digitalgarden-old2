---
{"dg-publish":true,"permalink":"/es/examples/alternate-checkboxes/","title":"Casillas de Verificación Alternativas","tags":["labs"]}
---


# Casillas de Verificación Alternativas

De https://minimal.guide/checklists, tomado el 5 de abril de 2024.


|     | Syntax | Description |
| --- | ------ | ----------- |
 | `- [ ]` | to-do       |
 | `- [/]` | incomplete  |
 | `- [x]` | done        |
 | `- [-]` | canceled    |
 | `- [>]` | forwarded   |
 | `- [<]` | scheduling  |
 | `- [?]` | question    |
 | `- [!]` | important   |
 | `- [*]` | star        |
 | `- ["]` | quote       |
 | `- [l]` | location    |
 | `- [b]` | bookmark    |
 | `- [i]` | information |
 | `- [S]` | savings     |
 | `- [I]` | idea        |
 | `- [p]` | pros        |
 | `- [c]` | cons        |
 | `- [f]` | fire        |
 | `- [k]` | key         |
 | `- [w]` | win         |
 | `- [u]` | up          |
 | `- [d]` | down        |


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