let reveiw=[
    {
        Image: "https://randomuser.me/api/portraits/men/95.jpg",
        name: "Regina Rivera",
        designation: "Web Developer",
        intro: "I'm web developer since last 3 years I have good experience <br/> in fronted developer.",
    },
    {
        Image: "https://randomuser.me/api/portraits/women/96.jpg",
        name: "Samantha Brown",
        designation: "Data Scientist",
        intro: "I'm Data Scientist since last 2 years I have good experience <br/> also I have multinatioanl companies experince"
    },
    {
        Image: "https://randomuser.me/api/portraits/men/97.jpg",
        name: "Samantha Brown",
        designation: "SEO Speclist",
        intro: "I'm SEO Speclist since last 3 years I have good experience <br/> I can do SEO with your website and acheive to 1st google ranking"
    },
    {
        Image: "https://randomuser.me/api/portraits/men/98.jpg",
        name: "Samantha Brown",
        designation: "Web Developer",
        intro: "I'm web developer since last 3 years I have good experience <br/> also I'm doing backened Developer."
    },
    {
        Image: "https://randomuser.me/api/portraits/women/90.jpg",
        name: "Samantha Brown",
        designation: "AI Lead Member",
        intro: "I'm AI Lead Member since last 6 months I have good experience <br/> to Machine Learning and Deep Learning."
    }
]

let count=0

document.querySelector("img").src=reveiw[count].Image
document.querySelector("#name").innerHTML=reveiw[count].name
document.querySelector(".post").innerHTML=reveiw[count].designation
document.querySelector(".reveiw").innerHTML=reveiw[count].intro
document.querySelector("#btn1").innerHTML=arw1

function prev(){
    count--;
    if(count<0){
        count=reveiw.length-1
    }
    document.querySelector("img").src=reveiw[count].Image
    document.querySelector("#name").innerHTML=reveiw[count].name
    document.querySelector(".post").innerHTML=reveiw[count].designation
    document.querySelector(".reveiw").innerHTML=reveiw[count].intro
}

function next(){
    count++;
    if(count>=reveiw.length){
        count=0
    }
        document.querySelector("img").src=reveiw[count].Image
        document.querySelector("#name").innerHTML=reveiw[count].name
        document.querySelector(".post").innerHTML=reveiw[count].designation
        document.querySelector(".reveiw").innerHTML=reveiw[count].intro
}