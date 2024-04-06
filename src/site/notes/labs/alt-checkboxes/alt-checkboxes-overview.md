---
{"dg-publish":true,"dg-path":"Taller/alt-checkboxes/alt-checkboxes-overview.md","permalink":"/taller/alt-checkboxes/alt-checkboxes-overview/","title":"Casillas de Verificación Alternativas","tags":["labs"],"noteIcon":1,"created":"2024-04-05T10:55:37.000-06:00","updated":"2024-04-06T12:57:59.784-06:00"}
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

![Pasted image 20240406125728.png|150](/img/user/files/Pasted%20image%2020240406125728.png)
# Relacionado

- [# Alternate checkboxes using userSetup.js #576](https://github.com/oleeskild/obsidian-digital-garden/discussions/576)