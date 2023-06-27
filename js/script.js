//MAIN-PAGE
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

//second-page
//監視対象が範囲内に現れたら実行する動作
const odori=(entries)=>{
    const keyframes={
        opacity:[0,1],
        translate:['500px 0',0],
    };
    const options={
        duration:3000,
    };
    console.log(entries[0].target);
    entries[0].target.animate(keyframes,options);
};

const abu={
    // root:document.querySelector('#odori'),
    // rootMargin:'0px',
    // threshold:0.5
};
//監視ロボットの設定
const odoriObserver=new IntersectionObserver(odori,abu);

//#odoriを監視するように指示
odoriObserver.observe(document.querySelector('#odori'));

const loadingAreaGrey=document.querySelector('#loading');
const loadingAreaGreen=document.querySelector('#loading-screen');
const loadingText=document.querySelector('#loading p');

window.addEventListener('load',()=>{
    ローディング中(グレースクリーン)
    loadingAreaGrey.animate(
        {
            opacity:[1,0],
            visibility:'hidden',
        },
        {
            duration:2000,
            delay:1200,
            easing:'ease',
            fill:'forwards',
        }
    );

    //ローディング中（薄緑スクリーン）
    loadingAreaGreen.animate(
        {
            translate:['0 100vh','0 0','0 -100vh']
        },
        {
            duration:2000,
            delay:800,
            easing:'ease',
            fill:'forwards',
        }
    );
    ローディング中テキスト
    loadingText.animate(
    [
        {
            opacity:1,
            offset:.8 //80%
        },
        {
            opacity:0,
            offset:1 //100%
        },
    ],
    {
        duration:1200,
        easing:'ease',
        fill:'forwards',
    }
    );
});