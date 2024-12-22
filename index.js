
let urlList=['https://drive.google.com/thumbnail?id=1FSBJCiXmT6vFcXjooyjyQDMUjqKs9ll-&sz=w1000','https://drive.google.com/thumbnail?id=1eYiF6aOOtF9-Aqfxb8I_zq3gkikC9gxa&sz=w1000','https://drive.google.com/thumbnail?id=1K6V0-yEEKYQ8KDo1VJdHtAYPJ7xK8V9q&sz=w1000','https://drive.google.com/thumbnail?id=1jfewL-yCFg124vClJVcBeTijxR_TGO5s&sz=w1000','https://drive.google.com/thumbnail?id=1zPYvdrjk2SLTTDK0QT8rJ9xIhCvjdBz6&sz=w1000',  'https://drive.google.com/thumbnail?id=1ykcntUO9SWC9qR6K4HG6oAHHcqTBhTpc&sz=w1000','https://drive.google.com/thumbnail?id=1r8HsYfp_a4tsgdjtC7L5aEyfKYIexVhX&sz=w1000','https://drive.google.com/thumbnail?id=1Aek9aZPDFkAGsHZGvi8VMJG6zQ1NyPoK&sz=w1000', 'https://drive.google.com/thumbnail?id=1q4v9tNRngH6A0wxpnf_u4Hjv509_X1VC&sz=w1000',   'https://drive.google.com/thumbnail?id=1mOhORTyQXY-Jf4aJI1htMwWBrK6g_phA&sz=w1000','https://drive.google.com/thumbnail?id=1LbDVhev08pT4WICOzPfxQwU1BzJSVVxp&sz=w1000','https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000', 'https://drive.google.com/thumbnail?id=19GWI0oPTe5CT0pHJEe1dZIkAisoUWUx7&sz=w1000', 'https://drive.google.com/thumbnail?id=1UdEY7dEs1aXr-mWK0QfUj4SwIrnmYVhq&sz=w1000','https://drive.google.com/thumbnail?id=1dtjGZ7JmfjWRCynsFvtMzxDEECkNNwff&sz=w1000','https://drive.google.com/thumbnail?id=1MimckjxzfjkxmDRmkttcjr7g3fkf0CIg&sz=w1000','https://drive.google.com/thumbnail?id=1iruvCZxXR3lVjE6LNOoMOxUhvzV7O7SF&sz=w1000',   'https://drive.google.com/thumbnail?id=1LbDVhev08pT4WICOzPfxQwU1BzJSVVxp&sz=w1000','https://drive.google.com/thumbnail?id=1-NZ0_55zgD12tlkYwdNA1N2NsN9sMZHD&sz=w1000',  'https://drive.google.com/thumbnail?id=1putUMMUOkkcnPj4ZHkpwS4Jcvw-xkIBq&sz=w1000', 'https://drive.google.com/thumbnail?id=1tx2xoP5JFpxBmEMFAoz_udWZxrOgY3uW&sz=w1000'];

// home page


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and tab contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Add active class to the clicked tab and corresponding tab content
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});

var prodSlider = document.getElementById("sliderProd");
prodSlider.style.backgroundColor = "rgba(0, 52, 129, 0)";
//prodSlider.style.padding="10px";

for (i = 0; i < urlList.length; i++) {
    var prod = document.createElement('div');
    
  
    prod.style.display = "flex";
    prod.style.flexDirection = "row"; 
    prod.style.justifyContent = "center"; 
    prod.style.alignItems = "center"; 
    
    prod.style.backgroundColor = "rgba(250, 255, 251, 0.27)";
    prod.style.width = "800px";
    prod.style.height = "350px";
    prod.style.marginRight = "20px";
    prod.style.paddingLeft = "20px";
    prod.style.paddingRight = "20px";
    prod.style.borderRadius ="10px";


   
    var img = document.createElement('img');
    img.src = urlList[i];
    img.alt = 'Description of the image';
    img.width = 300;
    img.height = 300;
    

   
    var imgDes = document.createElement('div');
    imgDes.style.fontSize = "15px";
    
    imgDes.style.textAlign = "center"; 
    imgDes.style.marginTop = "10px"; 
    imgDes.style.width = "900px";
    
    var des = document.createElement('p');
    des.style.textAlign="left";
    des.style.margin = "0";
    des.style.padding = "0";
    des.style.paddingLeft = "5px";
    des.textContent = "This exquisite jewel features a stunning, faceted gemstone that catches the light from every angle, creating a captivating sparkle. Set in a sleek, polished band, it exudes timeless elegance and sophistication, making it the perfect accessory for any occasion. Whether worn alone or paired with other pieces, this jewel adds a touch of luxury and charm to any ensemble.";
    des.style.color = "black";

    
    imgDes.appendChild(des);

    
    prod.appendChild(img);
    prod.appendChild(imgDes);

    prodSlider.appendChild(prod);
}
var aboutMeText = "Hi, I'm Emily, a jewelry designer and artist with a deep passion for creating unique, handcrafted pieces that tell a story. For me, jewelry is more than just an accessory—it's a way to express creativity, celebrate individuality, and add a personal touch to everyday life. I draw inspiration from nature, modern art, and my travels, blending vibrant colors, organic shapes, and timeless designs to craft pieces that feel both modern and meaningful. After years of designing and perfecting my craft, I’m thrilled to finally open my own online shop to share my creations with the world. Each piece is made with love and attention to detail, whether it’s a delicate necklace, a bold statement ring, or an elegant bracelet. I hope my jewelry brings a little bit of beauty and inspiration into your life, just as creating it has brought so much joy to mine. Welcome to my shop thank you for supporting my dream!";
var textSpace = document.getElementById("aboutMeSpace");
var textP = document.createElement('p');
textP.textContent=aboutMeText; 
textP.style.textAlign="left";
textP.style.fontSize="30px";
textSpace.style.color="black";
textSpace.appendChild(textP);



var contactsSpace = document.getElementById("bottomContacts");



// myWork page


var prodList =document.getElementById("prodList");

for (i = 0; i < urlList.length; i++) {
    var prod = document.createElement('div');
    prod.style.display = "flex";
    prod.style.flexDirection = "row"; 
    prod.style.justifyContent = "center"; 
    prod.style.alignItems = "center"; 
    
    prod.style.backgroundColor = "rgba(250, 255, 251, 0.27)";
    prod.style.width = "800px";
    prod.style.height = "350px";
    prod.style.marginRight = "20px";
    prod.style.marginBottom = "20px";
    prod.style.paddingLeft = "20px";

    prod.style.paddingRight = "20px";
    //prod.style.paddingBottom = "20px";
    prod.style.borderRadius ="10px";


   
    var img = document.createElement('img');
    img.src = urlList[i];
    img.alt = 'Description of the image';
    img.width = 300;
    img.height = 300;
    

   
    var imgDes = document.createElement('div');
    imgDes.style.fontSize = "15px";
    
    imgDes.style.textAlign = "center"; 
    imgDes.style.marginTop = "10px"; 
    
    var des = document.createElement('p');
    des.style.textAlign="left";
    des.style.margin = "0";
    des.style.padding = "0";
    des.style.paddingLeft = "5px";
    des.textContent = "This exquisite jewel features a stunning, faceted gemstone that catches the light from every angle, creating a captivating sparkle. Set in a sleek, polished band, it exudes timeless elegance and sophistication, making it the perfect accessory for any occasion. Whether worn alone or paired with other pieces, this jewel adds a touch of luxury and charm to any ensemble.";
    des.style.color = "black";

    
    imgDes.appendChild(des);

    
    prod.appendChild(img);
    prod.appendChild(imgDes);
    

    prodList.appendChild(prod);
}