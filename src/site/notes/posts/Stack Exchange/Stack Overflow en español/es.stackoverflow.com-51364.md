---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-51364.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-51364/","title":"¿Como resolver numéricamente ecuaciones de la forma y^3 + (a + bx^2)*y^2 = cx^2 donde las variables son x e y?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.165-06:00"}
---

# ¿Como resolver numéricamente ecuaciones de la forma y^3 + (a + bx^2)*y^2 = cx^2 donde las variables son x e y?

(Publicado por la OP en comentarios)

@Maguz ya logré solucionar la ecuación, muchas gracias por preguntar :)

    function y = resol(A,B,C,x) syms z k = z^3+(A+Bx^2)*z^2-Cx^2; 
    z = double(solve(k)); 
    y=z(1); 
    end clc,clear,close % Variables generales teta=24; 
    x=[10:2:300]; 
    
    % % % % % % % %Variables alfa1=0.000019003; 
    E1=8997.961264; 
    w1=0.002705634; 
    t1=5.14; 
    m1=1.000305144; 
    s1=50.26548246; 
    B=(w1*w1*m1*m1*E1)/(24*t1*t1); 
    C=w1*w1*E1/24; % % % % % % % %Temp=15°C teta1=15; 
    A1=alfa1*E1*(teta1-teta)-t1; 
    for i=1:length(x) y11(i)=resol(A1,B,C,x(i)); 
    end y1=y11*s1; 
    % % % % % % % %Temp=20°C teta2=20; 
    A2=alfa1*E1*(teta2-teta)-t1; 
    for i=1:length(x) y22(i)=resol(A2,B,C,x(i)); 
    end y2=y22*s1; 
    % % % % % % % %Temp=25°C teta3=25; 
    A3=alfa1*E1*(teta3-teta)-t1; 

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/51364\|https://es.stackoverflow.com/q/51364]]

