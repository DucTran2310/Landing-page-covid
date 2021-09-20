gsap.registerPlugin(ScrollTrigger);

//Animation Section
const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home",
                start: "top center",
            },
        });


    tl.from(".img__home", {x: 100, opacity: 0, duration: 1.1})
        .from(".content .content__title",{x: -80, opacity: 0, duration: 1}, "-=0.5")
        .from(".content .content__slogan",{x: -20, opacity: 0, duration: 1.3}, "-=0.6")
        .from(".content .content__des",{y: 20, opacity: 0, duration: 0.8}, "-=0.6")
        .from(".btn",{ x: -20, opacity: 0, duration: 0.8}, "-=0.4");

// Animation case
const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".case",
                start: "top bottom",
            },
        });

    tl1.from(".case .block__caption", { x: -10, opacity: 0, duration: 1 })
        .from(".case .block__heading", { x: 10, opacity: 0, duration: 1 }, "-=0.5");

        gsap.from('.case__item', {
            scrollTrigger: '.case__item',
            duration: 1.2,
            opacity: 0,
            y: -50,
            stagger: 0.25,
            delay: 0.6
        });

// Animation tracker
const tracker = gsap.timeline({
    scrollTrigger: {
        trigger: ".tracker__container",
        start: "top bottom",
    },
});
    tracker.from(".tracker__container .block__caption", { x: -10, opacity: 0, duration: 1 })
            .from(".tracker__container .block__heading", { x: 10, opacity: 0, duration: 1 }, "-=0.5");
            gsap.from('.tracker__date', {
                scrollTrigger: '.tracker__date',
                duration: 1.2,
                opacity: 0,
                y: -50,
                stagger: 0.25,
                delay: 0.6
            });
            gsap.from('.tracker__form', {
                scrollTrigger: '.tracker__form',
                duration: 1.2,
                opacity: 0,
                y: -50,
                stagger: 0.25,
                delay: 0.6
            },"-=0.5");
            gsap.from('.tracker__name-country', {
                scrollTrigger: '.tracker__name-country',
                duration: 1.2,
                opacity: 0,
                y: -50,
                stagger: 0.25,
                delay: 0.6
            },"-=0.5");
            gsap.from('.tracker__content', {
                scrollTrigger: '.tracker__content',
                duration: 1.2,
                opacity: 0,
                y: -50,
                stagger: 0.25,
                delay: 0.6
            },"-=0.5");
            gsap.from('.chart', {
                scrollTrigger: '.chart',
                duration: 1.2,
                opacity: 0,
                y: -50,
                stagger: 0.25,
                delay: 0.6
            },"-=0.5");


// Animate symptoms
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".symptoms",
        start: "top bottom",
    },
});
        tl3.from(".symptoms .block__caption", { x: -50, opacity: 0, duration: 0.8 })
        .from(
            ".symptoms .block__heading",
            { x: 30, opacity: 0, duration: 0.8 },
            "-=0.5"
        )
        .from(
            ".symptoms .block__desc",
            { y: 30, opacity: 0, duration: 0.8 },
            "-=0.3"
        )
        .from(
            ".symptoms__img1", { x: -80, opacity: 0, duration: 1 }, "-=0.5")
        .from(
            ".symptoms__virus", {y: 80, opacity: 0, duration: 2 }, "-=0.5")
        .from(
            ".symptoms__box", { x: 80, opacity: 0, duration: 1 }, "-=0.5");

// Animate protect 
gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".protect",
        start: "top bottom",
    },
});

tl2.from(".protect .block__caption", { x: -20, opacity: 0, duration: 0.6 })
    .from(".protect .block__heading", { x: 20, opacity: 0, duration: 0.6 }, "-=0.5");

    gsap.from('.protect__wrapper', {
        scrollTrigger: '.protect__wrapper',
        duration: 1.8,
        opacity: 0,
        x: -50,
        stagger: 0.25,
        delay: 0.8
    },"-=0.7");


// Animate handwash 
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".handwash",
        start: "top bottom",
    },
});
        tl4.from(".handwash .block__caption", { x: -50, opacity: 0, duration: 0.8 })
        .from(
            ".handwash .block__heading",
            { x: 30, opacity: 0, duration: 0.8 },
            "-=0.5"
        )
        
        .from(
            ".handwash__step", { x: -40, opacity: 0, duration: 1 }, "-=0.5" );

// Animate doctor 
const a = gsap.timeline({
    scrollTrigger: {
        trigger: ".doctor",
        start: "top bottom"
    }
});
        a.from(".doctor .block__caption", { x: -55, opacity: 0, duration: 0.8 })
            .from(".doctor .block__heading", { x: 35, opacity: 0, duration: 0.8 },"-=0.3");
        
            gsap.from(".doctor__person", { y: -55, opacity: 0, duration: 1 }, "-=0.5");

