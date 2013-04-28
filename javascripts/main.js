$(function(){
        $("#nav_docs_gs").click(makeNavFunc('nav_docs_gs', 'started.html'));
        $("#nav_docs_faq").click(makeNavFunc('nav_docs_faq', 'faq.html'));
        $("#nav_docs_wiki").click(function(){  window.location = 'https://github.com/hecatonchire/hecatonchire.github.com/wiki'});
        $("#nav_download").click(makeNavFunc('nav_download', 'download.html'));
        $("#nav_news").click(makeNavFunc('nav_news', 'news.html'));
        $("#nav_contant").click(makeNavFunc('nav_contant', 'contact.html'));

        var content;
        $.get('news.html', function(data){
            content = data;
            $("#news_ul").html($(content).find('li').slice(0,3));
        });
    });

function makeNavFunc(name, page) {
    var selector_name = "#" + name;
    function nav() {
        $('#main_content').load(page);
        $("#main-menu-bar").find("li").removeClass("active");
        $(selector_name).parent().addClass("active");
        $("#collape-btn").click();
    }
    return nav;
}
