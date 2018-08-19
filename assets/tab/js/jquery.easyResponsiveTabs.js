! function(a) {
    a.fn.extend({
        easyResponsiveTabs: function(b) {
            var c = {
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    activate: function() {}
                },
                b = a.extend(c, b),
                d = b,
                e = d.type,
                f = d.fit,
                g = d.width,
                h = "tab-top",
                i = "tab-bottom",
                j = "tab-left";
            tabsRight = "tab-right", accord = "accordion";
            var k = window.location.hash,
                l = !(!window.history || !history.replaceState);
            a(this).bind("tabactivate", function(a, c) {
                "function" == typeof b.activate && b.activate.call(c, a)
            }), this.each(function() {
                function n() {
                    if (e == h && c.addClass("resp-tabs-top"), e == i) {
                        var a = c.addClass("resp-tabs-bottom");
                        a.find("ul.resp-tabs-list").insertAfter(a.find(".resp-tabs-container"))
                    }
                    e == j && c.addClass("resp-tabs-left"), e == tabsRight && c.addClass("resp-tabs-right"), 1 == f && c.css({
                        width: "100%",
                        margin: "0px"
                    }), e == accord && (c.addClass("resp-accordion"), c.find(".resp-tabs-list").css("display", "none"))
                }
                var c = a(this),
                    d = c.find("ul.resp-tabs-list"),
                    m = c.attr("id");
                c.find("ul.resp-tabs-list li").addClass("resp-tab-item"), c.css({
                    display: "block",
                    width: g
                }), c.find(".resp-tabs-container > div").addClass("resp-tab-content"), n();
                var o;
                c.find(".resp-tab-content").before("<h4 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h4>");
                var p = 0;
                c.find(".resp-accordion").each(function() {
                    o = a(this);
                    var b = c.find(".resp-tab-item:eq(" + p + ")"),
                        d = c.find(".resp-accordion:eq(" + p + ")");
                    d.append(b.html()), d.data(b.data()), o.attr("aria-controls", "tab_item-" + p), p++
                });
                var r, q = 0;
                c.find(".resp-tab-item").each(function() {
                    $tabItem = a(this), $tabItem.attr("aria-controls", "tab_item-" + q), $tabItem.attr("role", "tab");
                    var b = 0;
                    c.find(".resp-tab-content").each(function() {
                        r = a(this), r.attr("aria-labelledby", "tab_item-" + b), b++
                    }), q++
                });
                var s = 0;
                if ("" != k) {
                    var t = k.match(new RegExp(m + "([0-9]+)"));
                    null !== t && 2 === t.length && (s = parseInt(t[1], 10) - 1, s > q && (s = 0))
                }
                a(c.find(".resp-tab-item")[s]).addClass("resp-tab-active"), b.closed === !0 || "accordion" === b.closed && !d.is(":visible") || "tabs" === b.closed && d.is(":visible") ? a(c.find(".resp-tab-content")[s]).addClass("resp-tab-content-active resp-accordion-closed") : (a(c.find(".resp-accordion")[s]).addClass("resp-tab-active"), a(c.find(".resp-tab-content")[s]).addClass("resp-tab-content-active").attr("style", "display:block")), c.find("[role=tab]").each(function() {
                    var b = a(this);
                    b.click(function() {
                        var b = a(this),
                            d = b.attr("aria-controls");
                        if (b.hasClass("resp-accordion") && b.hasClass("resp-tab-active")) return c.find(".resp-tab-content-active").slideUp("", function() {
                            a(this).addClass("resp-accordion-closed")
                        }), b.removeClass("resp-tab-active"), !1;
                        if (!b.hasClass("resp-tab-active") && b.hasClass("resp-accordion") ? (c.find(".resp-tab-active").removeClass("resp-tab-active"), c.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), c.find("[aria-controls=" + d + "]").addClass("resp-tab-active"), c.find(".resp-tab-content[aria-labelledby = " + d + "]").slideDown().addClass("resp-tab-content-active")) : (c.find(".resp-tab-active").removeClass("resp-tab-active"), c.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), c.find("[aria-controls=" + d + "]").addClass("resp-tab-active"), c.find(".resp-tab-content[aria-labelledby = " + d + "]").addClass("resp-tab-content-active").attr("style", "display:block")), b.trigger("tabactivate", b), l) {
                            var e = window.location.hash,
                                f = m + (parseInt(d.substring(9), 10) + 1).toString();
                            if ("" != e) {
                                var g = new RegExp(m + "[0-9]+");
                                f = null != e.match(g) ? e.replace(g, f) : e + "|" + f
                            } else f = "#" + f;
                            history.replaceState(null, null, f)
                        }
                    })
                }), a(window).resize(function() {
                    c.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery);
/*window.onhashchange = function(){var window_temp=window.location.hash.split("ARInternational")[1]-1;$("[aria-controls='tab_item-"+window_temp+"']").trigger("click")};*/
window.onhashchange = function(){var window_temp=window.location.hash.split("ARInternational")[1];$(".resp-tabs-list li:nth-child("+window_temp+")").trigger("click")};
