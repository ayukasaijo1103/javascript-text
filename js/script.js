const heading=document.querySelector('#heading');

const keyframes={
    opacity:[0,1],
    translate:['0 50px',0],
    // color:['#f6bfbc','#f5b1aa','#f5b199','#efab93']
    // color:['transparent','#fff'],
    // backgroundPosition:['100% 0','0 0'],
};
const options={
    duration:2000,
    easing:'ease',
    // direction:'alternate',
    // iterations:Infinity,
};
heading.animate(keyframes,options);

const fuwa={
    borderRadius:[
        '20% 50% 50% 70%/50% 50% 70% 50%',
        '50% 20% 50% 50%/40% 40% 60% 60%',
        '50% 40% 20% 40%/40% 50% 50% 80%',
        '50% 50% 50% 20%/40% 40% 60% 60%',
]
};

const option={
    duration:8000,
    easing:'ease',
    direction:'alternate',
    iterations:Infinity,
};
heading.animate(fuwa,option);
