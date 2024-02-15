let obj = document.querySelector('.wd');
let jd = document.querySelector('.jd');
let mp = document.querySelector('.mp');

setInterval(() => {
    mp.classList.toggle('w-0');
    mp.classList.toggle('w-full');
    obj.classList.toggle('hidden');
    jd.classList.toggle('hidden');

}, 2000);

let wa= document.querySelector('.wa');
let ayu = document.querySelector('.ayu');
let nav = document.querySelector('.nav');
let features = document.querySelector('.features');
let hide = document.querySelector('.hide');

let pro = document.querySelector('#pro');
let edu = document.querySelector('#edu');

    
let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');


let abc = ()=>{
    l1.classList.toggle('rotate-45')
    l1.classList.toggle('scale-x-125')
    l3.classList.toggle('-rotate-45');
    l3.classList.toggle('scale-x-125');
    l3.classList.toggle('-translate-y-2');

    l2.classList.toggle('w-0');
    l2.classList.toggle('w-4');
}



let project = document.querySelector('#project');
let education = document.querySelector('#education');
let repo = document.querySelector('#repo');


let cer = document.querySelector('#cer');
let ce = document.querySelector('#ce');



let sk = document.querySelector('#sk');
let re = document.querySelector('#re');
let skills = document.querySelector('.skills');


let all = document.querySelector('.all');
let co = document.querySelector('#co');



let mybutton = document.querySelector('#mybtn');
let last = document.querySelector('footer');
let profile = document.querySelector('.profile');
 
let tailwind =()=>{
    features.classList.add('w-0');
    features.classList.remove('w-full');
    features.classList.toggle('p-4');
    features.classList.toggle('sm:p-6');
    // hide.classList.toggle('ml-80');
}

co.addEventListener('click',()=>{
    last.scrollIntoView();
    tailwind();
    mybutton.style.display = "none";

    profile.classList.remove('h-0');
    profile.classList.add('h-80');
    wa.classList.toggle('hidden');
    abc();
})

let close = document.querySelector('.close');
close.addEventListener('click',()=>{
    
    profile.classList.remove('h-80');
    profile.classList.add('h-0');
    
    wa.classList.toggle('hidden');
    
})


nav.addEventListener('click',()=>{
    features.classList.add('w-full');
    features.classList.toggle('p-4');
    features.classList.toggle('sm:p-6');
    
    
    

    setTimeout(() => {
       abc();
    }, 500);

})


ce.addEventListener('click',()=>{
    cer.scrollIntoView();
    tailwind();
    abc();
})

hide.addEventListener('click',()=>{
    features.classList.remove('w-full');
features.classList.add('w-0');
features.classList.remove('p-4');
features.classList.remove('sm:p-6');
abc();
})


pro.addEventListener('click',()=>{
project.scrollIntoView();
tailwind();
abc();
})



edu.addEventListener('click',()=>{
education.scrollIntoView();
tailwind();
abc();
})



re.addEventListener('click',()=>{
    repo.scrollIntoView();
    tailwind();
    abc();
})


sk.addEventListener('click',()=>{
skills.scrollIntoView();tailwind();
abc();
})


let pp = document.querySelector('.pp');
let show = document.querySelector('.show');

show.addEventListener('click',()=>{
    pp.style.display= "block";
    show.style.display= "none";
})



let qq = document.querySelector('.qq');
let show2 = document.querySelector('.show2');

show2.addEventListener('click',()=>{
    qq.style.display= "block";
    show2.style.display= "none";
})

let rr = document.querySelector('.rr');
let show3 = document.querySelector('.show3');

show3.addEventListener('click',()=>{
    rr.style.display= "block";
    show3.style.display= "none";
})




window.onscroll = function () {
    scroll();
    scroll1();

}

let scroll = ()=>{

    if ( document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }


}

let xy = document.querySelectorAll('.nav h1')


let scroll1 = ()=>{

if( document.documentElement.scrollTop > 150){
    ayu.classList.add('sm:scale-50');
    ayu.classList.remove('sm:scale-100');
    ayu.classList.add('sm:opacity-20');
    ayu.classList.remove('sm:opacity-100');
  
}

else {
    ayu.classList.add('sm:scale-100');
    ayu.classList.remove('sm:scale-50');
    ayu.classList.remove('sm:opacity-20');
    ayu.classList.remove('sm:opacity-100');
}












    if ( document.documentElement.scrollTop > 20) {
        
        for (let i =0; i < xy.length; i++){
            xy[i].classList.remove('bg-gray-200');
            xy[i].classList.add('bg-sky-600');
    
        }
        
      } 
      else{
        for (let i =0; i < xy.length; i++){
            xy[i].classList.add('bg-gray-200');
            xy[i].classList.remove('bg-sky-600');
    
        }
      }
}




mybutton.addEventListener('click',()=>{
    
  document.documentElement.scrollTop = 0;

})



let imj = document.querySelector('.imj');
let cut = document.querySelector('.cut');
let eye = document.querySelector('.eye');

eye.addEventListener('click',()=>{
imj.style.display = "block";
cut.style.display = "block";
eye.style.display = "none";
})


cut.addEventListener('click',()=>{
    imj.style.display = "none";
cut.style.display = "none";
eye.style.display = "block"; 
})






let nav2 = document.querySelector('.nav2');

nav2.addEventListener('click',()=>{

    nav2.classList.remove('animate-pulse');
    nav2.classList.add('animate-bounce');

    setTimeout(() => {
        nav2.classList.remove('animate-bounce');
    }, 4000);


});



setTimeout(() => {
    ayu.classList.remove('animate-bounce');
}, 1070);


let i1= document.querySelector('.i1');
let e1= document.querySelector('.e1');
let c1= document.querySelector('.c1');



e1.addEventListener('click',()=>{
    e1.style.display = "none";
    c1.style.display = "block";
    i1.style.display = "block";
    });
c1.addEventListener('click',()=>{
    
    e1.style.display = "block";
    c1.style.display = "none";
    i1.style.display = "none";
    }
    );



let i2= document.querySelector('.i2');
let e2= document.querySelector('.e2');
let c2= document.querySelector('.c2');


e2.addEventListener('click',()=>{
    e2.style.display = "none";
    c2.style.display = "block";
    i2.style.display = "block";
    });
c2.addEventListener('click',()=>{
    
    e2.style.display = "block";
    c2.style.display = "none";
    i2.style.display = "none";
    }
    );




    let i3= document.querySelector('.i3');
let e3= document.querySelector('.e3');
let c3= document.querySelector('.c3');


e3.addEventListener('click',()=>{
    e3.style.display = "none";
    c3.style.display = "block";
    i3.style.display = "block";
    });
c3.addEventListener('click',()=>{
    
    e3.style.display = "block";
    c3.style.display = "none";
    i3.style.display = "none";
    }
    );




    let i4= document.querySelector('.i4');
let e4= document.querySelector('.e4');
let c4= document.querySelector('.c4');


e4.addEventListener('click',()=>{
    e4.style.display = "none";
    c4.style.display = "block";
    i4.style.display = "block";
    });
c4.addEventListener('click',()=>{
    
    e4.style.display = "block";
    c4.style.display = "none";
    i4.style.display = "none";
    }
    );


    let i5= document.querySelector('.i5');
let e5= document.querySelector('.e5');
let c5= document.querySelector('.c5');


e5.addEventListener('click',()=>{
    e5.style.display = "none";
    c5.style.display = "block";
    i5.style.display = "block";
    });
c5.addEventListener('click',()=>{
    
    e5.style.display = "block";
    c5.style.display = "none";
    i5.style.display = "none";
    }
    );




    let i6= document.querySelector('.i6');
    let e6= document.querySelector('.e6');
    let c6= document.querySelector('.c6');
    
    
    e6.addEventListener('click',()=>{
        e6.style.display = "none";
        c6.style.display = "block";
        i6.style.display = "block";
        });
    c6.addEventListener('click',()=>{
        
        e6.style.display = "block";
        c6.style.display = "none";
        i6.style.display = "none";
        }
        );
    
    let m1 = document.querySelector('.m1');
    let m2 = document.querySelector('.m2');
    let m3 = document.querySelector('.m3');
    let m4 = document.querySelector('.m4');
    let m5 = document.querySelector('.m5');


    let  colorchange = (obj,t)=>{

        return new Promise(
            (resolve,reject)=>{

                obj.classList.add('text-red-200');
                    setTimeout(() => {
                        obj.classList.add("scale-150");
                        obj.classList.remove("text-red-200");
                        obj.classList.add("text-white");
                       
                        setInterval(() => {
                            
                        resolve();
                        }, 300);
                        

                    },t);
                      
            }
        );


    }
        
    let  colchange = (obj,t)=>{

        return new Promise(
            (resolve,reject)=>{
                obj.classList.remove("text-white");
                obj.classList.add("text-sky-500");
                    setTimeout(() => {
                      
                        obj.classList.remove("text-sky-500");
                        obj.classList.add("text-white");
                        resolve();

                    },t);
                      
            }
        );


    }
        

let x = async ()=>{
    await colorchange(m1,0);
    await colorchange(m5,1000);
    await colorchange(m2,1000);
    await colorchange(m4,1000);
    await colorchange(m3,1000);

    await colchange(m1,800);
    await colchange(m2,350);
    await colchange(m3,350);
    await colchange(m4,350);
    await colchange(m5,600);
    await colchange(m4,350);
    await colchange(m3,350);
    await colchange(m2,350);
    await colchange(m1,800);



}
    

x();
    