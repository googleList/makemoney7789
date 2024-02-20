(function(a) {
   
        a(".dl-menuwrapper").dlmenu({
            animationClasses: {
                classin: "dl-animate-in-5",
                classout: "dl-animate-out-5"
            }
        })
   
    function u() {
        var w = a(".navigation-holder");
        var x = a(".navbar-header .open-btn");
        var y = a(".navbar-header .navbar-toggler");
        x.on("click", function(z) {
            z.stopImmediatePropagation();
            w.toggleClass("slideInn");
            y.toggleClass("x-close");
            return false
        })
    }
    u();
    function t() {
        var x = window.innerWidth;
        var w = a("#navbar > ul");
        if (x <= 991) {
            w.addClass("small-nav")
        } else {
            w.removeClass("small-nav")
        }
    }
    t();
    function n() {
        var B = window.innerWidth;
        var w = a(".navigation-holder");
        var z = a(".navigation-holder > .small-nav");
        var A = z.find(".sub-menu");
        var x = z.find(".mega-menu");
        var y = z.find(".menu-item-has-children > a");
        if (B <= 991) {
            A.hide();
            x.hide();
            y.on("click", function(D) {
                var C = a(this);
                C.siblings().slideToggle();
                D.preventDefault();
                D.stopImmediatePropagation()
            })
        } else {
            if (B > 991) {
                w.find(".sub-menu").show();
                w.find(".mega-menu").show()
            }
        }
    }
    n();
    function b() {
        if (a(".parallax").length) {
            a(".parallax").each(function() {
                var x = a(this).position().top;
                var A = x - a(window).scrollTop();
                var w = -(A / 5);
                var z = w + "px";
                var y = a(this).data("bg-image");
                a(this).css({
                    backgroundImage: "url(" + y + ")",
                    backgroundPosition: "50%" + z,
                    backgroundSize: "cover"
                })
            })
        }
    }
    var h = [];
    jQuery(".swiper-slide").each(function(w) {
        h.push(jQuery(this).find(".slide-inner").attr("data-text"))
    });
    var e = 0.5;
    var r = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            progress: function() {
                var A = this;
                for (var w = 0; w < A.slides.length; w++) {
                    var z = A.slides[w].progress;
                    var x = A.width * e;
                    var y = z * x;
                    A.slides[w].querySelector(".slide-inner").style.transform = "translate3d(" + y + "px, 0, 0)"
                }
            },
            touchStart: function() {
                var x = this;
                for (var w = 0; w < x.slides.length; w++) {
                    x.slides[w].style.transition = ""
                }
            },
            setTransition: function(x) {
                var y = this;
                for (var w = 0; w < y.slides.length; w++) {
                    y.slides[w].style.transition = x + "ms";
                    y.slides[w].querySelector(".slide-inner").style.transition = x + "ms"
                }
            }
        }
    };
    var q = new Swiper(".swiper-container",r);
    var m = a(".slide-bg-image");
    m.each(function(w) {
        if (a(this).attr("data-background")) {
            a(this).css("background-image", "url(" + a(this).data("background") + ")")
        }
    });
    function i() {
        if (a(".preloader").length) {
            a(".preloader").delay(100).fadeOut(500, function() {
                v.init()
            })
        }
    }
    var v = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true
    });
    if (a(".fancybox").length) {
        a(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        })
    }
    if (a(".video-btn").length) {
        a(".video-btn").on("click", function() {
            a.fancybox({
                href: this.href,
                type: a(this).data("type"),
                title: this.title,
                helpers: {
                    title: {
                        type: "inside"
                    },
                    media: {}
                },
                beforeShow: function() {
                    a(".fancybox-wrap").addClass("gallery-fancybox")
                }
            });
            return false
        })
    }
    if (a(".popup-gallery").length) {
        a(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function(w) {
                    return w.is("img") ? w : w.find("img")
                }
            }
        })
    }
    function o() {
        if (a(".sortable-gallery .gallery-filters").length) {
            var w = a(".gallery-container");
            w.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                }
            });
            a(".gallery-filters li a").on("click", function() {
                a(".gallery-filters li .current").removeClass("current");
                a(this).addClass("current");
                var x = a(this).attr("data-filter");
                w.isotope({
                    filter: x,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false
            })
        }
    }
    o();
    function g() {
        if (a(".masonry-gallery").length) {
            var w = a(".masonry-gallery").masonry({
                itemSelector: ".grid-item",
                columnWidth: ".grid-item",
                percentPosition: true
            });
            w.imagesLoaded().progress(function() {
                w.masonry("layout")
            })
        }
    }
    if (a(".odometer").length) {
        a(".odometer").appear();
        a(document.body).on("appear", ".odometer", function(w) {
            var x = a(".odometer");
            x.each(function() {
                var y = a(this).attr("data-count");
                a(this).html(y)
            })
        })
    }
    function d(w, x) {
        w.addClass("original").clone().insertAfter(w).addClass(x).removeClass("original")
    }
    if (a(".wpo-site-header .navigation").length) {
        d(a(".wpo-site-header .navigation"), "sticky-header")
    }
    var f = "";
    function p(w, x) {
        var z = a(window).scrollTop();
        var y = a(".wpo-site-header .navigation");
        if (a(window).scrollTop() > 1000) {
            if (z > f) {
                w.removeClass(x)
            } else {
                w.addClass(x)
            }
        } else {
            w.removeClass(x)
        }
        f = z
    }
    if (a(".header-search-form-wrapper").length) {
        var k = a(".search-toggle-btn");
        var l = a(".search-toggle-btn i");
        var j = a(".header-search-form");
        var c = a("body");
        k.on("click", function(w) {
            j.toggleClass("header-search-content-toggle");
            l.toggleClass("fi flaticon-magnifiying-glass fi ti-close");
            w.stopPropagation()
        });
        c.on("click", function() {
            j.removeClass("header-search-content-toggle")
        }).find(j).on("click", function(w) {
            w.stopPropagation()
        })
    }
    if (a(".wpo-testimonial-slider").length) {
        a(".wpo-testimonial-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                500: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 3
                },
            }
        })
    }
    if (a(".wpo-service-slider").length) {
        a(".wpo-service-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                500: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 4
                },
            }
        })
    }
    if (a(".wpo-happy-client-slide").length) {
        a(".wpo-happy-client-slide").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            items: 4
        })
    }
    if (a(".post-slider".length)) {
        a(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>', '<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        })
    }
    a("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");
    function s() {
        var w = 1000;
        if (a(window).scrollTop() > w) {
            a("a.back-to-top").fadeIn("slow")
        } else {
            a("a.back-to-top").fadeOut("slow")
        }
    }
    a(".back-to-top").on("click", function() {
        a("html,body").animate({
            scrollTop: 0
        }, 700);
        return false
    });
    if (a("#contact-form-main").length) {
        a("#contact-form-main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: "required",
                phone: "required",
                subject: {
                    required: true
                }
            },
            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                subject: "Please select your contact subject"
            },
            submitHandler: function(w) {
                a.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: a(w).serialize(),
                    success: function() {
                        a("#loader").hide();
                        a("#success").slideDown("slow");
                        setTimeout(function() {
                            a("#success").slideUp("slow")
                        }, 3000);
                        w.reset()
                    },
                    error: function() {
                        a("#loader").hide();
                        a("#error").slideDown("slow");
                        setTimeout(function() {
                            a("#error").slideUp("slow")
                        }, 3000)
                    }
                });
                return false
            }
        })
    }
    a(window).on("load", function() {
        i();
        u();
        n()
    });
    a(window).on("scroll", function() {
        if (a(".wpo-site-header").length) {
            p(a(".wpo-site-header .navigation"), "sticky-on")
        }
        s()
    });
    a(window).on("resize", function() {
        t();
        clearTimeout(a.data(this, "resizeTimer"));
        a.data(this, "resizeTimer", setTimeout(function() {
            n()
        }, 200))
    })
}
)(window.jQuery);
