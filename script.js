jQuery(document).ready(function () {
    giftOpen();
});

//Gift Open

function giftOpen() {
    jQuery("section.gift").on("click", function () {
    
                jQuery(".error").hide();
                jQuery(".lbWrapper,.lbWrapper .signupWrapper").hide();
                jQuery(".gift-top").removeClass("hovered");
                jQuery(".gift-text").hide();
                
                jQuery(".gift-final-text").show();
                jQuery(".gift-bottom").addClass("fadeout");
                jQuery(".gift-top").addClass("fadeout");
                //jQuery(".santa-wrapper").fadeIn(5000);
                setTimeout(function () {
                    jQuery(".santa-wrapper").fadeIn(5000);
                }, 500);
                setTimeout(function () {
                    jQuery("#merry").show(1000);
                    jQuery("#houu").fadeIn(1000);
                    jQuery("#box1").fadeIn(1000);
                    jQuery("#box").fadeIn(1000);

                }, 1000);
                // document.querySelector('.ty-text').style.backgroundColor = '#473838';

                //jQuery(".gift-card-text").fadeIn(5000);
                showText(); // Điều chỉnh thời gian hiển thị tại đây


    });
}

//Snow Fall

function createSnow() {

    var particles = [];
    var particleSize = 3;
    var maxParticles = 1000;
    var particleOpacity = .9;

    // Initialize canvas
    var canvas = document.getElementById('snow');
    var ctx = canvas.getContext('2d');

    // Get window width & height
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Apply canvas size based on window width & height.
    // This can be changed to bound within an element instead.
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    // Push particle iteration
    for (var i = 0; i < maxParticles; i++) {

        particles.push({

            // Particle x position
            x: Math.random() * windowWidth,

            // Particle y position
            y: Math.random() * windowHeight,

            // Particle radius
            r: Math.random(Math.min(particleSize)) * particleSize,

            // Particle density 
            d: Math.random() * maxParticles,
        });
    }

    // Render particles
    function render() {

        ctx.clearRect(0, 0, windowWidth, windowHeight);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + particleOpacity + ')';
        ctx.beginPath();

        for (var i = 0; i < maxParticles; i++) {

            // Iterate the particles.
            var p = particles[i];

            // Move particles along x, y.
            ctx.moveTo(p.x, p.y);

            // Draw particle.
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }

        ctx.fill();
        update();
    }

    // To create a more dynamic and organic flow, we need to apply an
    // incremental 'angle' that will iterate through each particle flow.
    var angle = 0.005;

    // Update particles
    function update() {

        // Incremental angle.
        angle += 0.005;

        for (var i = 0; i < maxParticles; i++) {

            var p = particles[i];

            // Offset the particles flow based on the angle.
            p.y += Math.cos(p.d) + p.r;
            p.x += Math.sin(angle) * Math.PI / 10;

            // Re-iterate the particles to the top once the particle has
            // reached the bottom of the window.
            if (p.y > windowHeight) {

                particles[i] = {

                    x: Math.random() * windowWidth,
                    y: 0,
                    r: p.r,
                    d: p.d
                };
            }
        }
    }

    
    // Call function.
  
}
let interval = null;
async function showText() {
    // jQuery("#box").remove();
    document.querySelector('.t1').style.display = 'flex';
    await sleep(2600);
    document.querySelector('.t1').style.display = 'none';
    await sleep(1000);

    // document.querySelector('.t2').style.display = 'flex';
    // await sleep(200);
    // document.querySelector('.t2').style.display = 'none';


    // document.querySelector('.ty-text').style.backgroundColor = '#a00707';

    document.querySelector('.t3').style.display = 'flex';
    await sleep(1000);
    document.querySelector('.t3').style.display = 'none';

    // changeBackground()


    // await sleep(2000);
    document.querySelector('.star').style.display = 'block';
    // document.querySelector('.ty-text').style.backgroundColor = '#ffffff';

    document.querySelector('.background-none')
    document.querySelector('.background-none').style.display = 'none';
    document.querySelector('.typing').style.display = 'flex';
    let html = `<span class="wrap" style='padding: 24px; background-color: rgb(105, 15, 15); color: white;'>Giáng sinh an lành</span>`
        jQuery(html).hide().appendTo("#type1").fadeIn(500, function(){
            var el = jQuery(this);
            setTimeout(function(){
                el.fadeOut('200',
                    function(){
                        jQuery(this).remove();
                    });
            }, 1500);
        });
    await sleep(3000);
    typing();

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 let index = 1;
async function changeBackground() {
    for (let index = 1; index < 5; index++) {
        const elBg = document.getElementById("animation-bg" + index);
        elBg.classList.add(`background${index}`);     
        await sleep(300)   
    }
}
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

async function typing () {
    const data = [
        "Đã có ai gửi lời chúc giáng sinh cho Thảo Anh chưa.?</span>",
        "Nếu chưa thì anh là người đầu tiên rồi!!!: D.", 
        "Thảo Anh có biết Anh muốn nói điều gì không?.",
        "Chúc Thảo Anh giáng sinh an lành, vui vẻ, ấm áp",
        "Khi nào em cần, anh luôn có mặt :))",
        "Đừng tìm những thứ <span style='color: white;padding:16px;background-color: green;'>đặc biệt</span>", 
        "Bởi vì", 
        "Thảo Anh chính là điều <span style='color: white;padding:16px;background-color: green;'>đặc biệt</span> trong mắt anh!!!: D",
        "<span style='font-size: 100px'>VÀ</span>", 
        "Chúc em luôn luôn tươi cười, vui vẻ mỗi ngày. Giáng sinh an lành nhé!!!!"
    ];
    for (const key in data) {
        let html = `<span class="wrap">${data[key]}</span>`
        jQuery(html).hide().appendTo("#type1").fadeIn(600, function(){
            var el = jQuery(this);
            setTimeout(function(){
                el.fadeOut('200',
                    function(){
                        jQuery(this).remove();
                    });
            }, 1800);
    });
        // jQuery("#type1").append(`<span class="wrap">${data[key]}</span>`).fadeIn(2000);
        await sleep(3000);
        
        // jQuery(html).remove();
    }
    document.querySelector('#end').style.display = 'flex';

    // document.querySelector('.typing').style.display = 'block';
    // var elements = document.getElementsByClassName('typewrite');
    // for (var i=0; i<elements.length; i++) {
    //     var toRotate = elements[i].getAttribute('data-type');
    //     var period = elements[i].getAttribute('data-period');
    //     if (toRotate) {
    //         new TxtType(elements[i], JSON.parse(toRotate), period);
    //     }
    // }
    // // INJECT CSS
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    // document.body.appendChild(css);
};
// showText();