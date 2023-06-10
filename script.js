let section =document.createElement('div')
section.setAttribute('id','main-box')
document.body.append(section)

let title =document.createElement('h1')
title.setAttribute('id','title')
title.innerHTML='Nationality Based On Names'
section.append(title)

let search =document.createElement('div')
search.setAttribute('id','searchbox')
section.append(search)

let input=document.createElement('input')
input.setAttribute('id','input')
input.setAttribute('type','text')
input.setAttribute('placeholder','Search Your Name')
search.append(input)

let btn=document.createElement('button')
btn.setAttribute('id','btn')
btn.innerHTML='Search'
section.append(btn)

let country=document.createElement('div')
country.setAttribute('id','country')
country.innerHTML='Top Two Countries'
section.append(country)

let result=document.createElement('div')
result.setAttribute('id','result')
country.append(result)


let ol=document.createElement('ol')
result.append(ol)

let li=document.createElement('li')
ol.append(li)

let li1=document.createElement('li')
ol.append(li1)


let p1=document.createElement("label")
p1.setAttribute('id','p1')
p1.innerHTML='Country Name'
li.append(p1)


let p=document.createElement('input')
p.setAttribute('id','p')
p.setAttribute('type','text')
li.append(p)



let p2=document.createElement("label")
p2.setAttribute('id','p2')
p2.innerHTML='Probability value'
li.append(p2)


let p3=document.createElement('input')
p3.setAttribute('id','p3')
p3.setAttribute('type','text')
li.append(p3)



let k1=document.createElement("label")
k1.setAttribute('id','k1')
k1.innerHTML='Country Name'
li1.append(k1)


let k=document.createElement('input')
k.setAttribute('id','k')
k.setAttribute('type','text')
li1.append(k)



let k2=document.createElement("label")
k2.setAttribute('id','k2')
k2.innerHTML='Probability value'
li1.append(k2)


let k3=document.createElement('input')
k3.setAttribute('id','k3')
k3.setAttribute('type','text')
li1.append(k3)






const btn2=document.getElementById('btn')
const input1=document.getElementById('input')





async function findname(word){
    let res=await fetch(`https://api.nationalize.io?name=${word}`  )
    let data=await res.json()
    console.log(data)
    document.getElementById('p').value=(data.country[0].country_id)
    document.getElementById('p3').value=(data.country[0].probability)
    document.getElementById('k').value=(data.country[1].country_id)
    document.getElementById('k3').value=(data.country[1].probability)




}

btn2.addEventListener('click',()=>{
    findname (input1.value)
})