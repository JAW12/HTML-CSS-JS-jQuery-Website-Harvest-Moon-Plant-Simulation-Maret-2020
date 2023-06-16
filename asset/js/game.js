
var day = 1;
var money = 500;
var minute = 0;
var hour = 0;
var period = "AM";
var kursor = "Normal";

var turnip = 0;
var potato = 0;
var tomato = 0;
var corn = 0;

var sturnip = 0;
var spotato = 0;
var stomato = 0;
var scorn = 0;

function changeTime(){
    minute = parseInt(minute) + 1;
    hour = parseInt(hour);
    if(minute == 60){
        hour++;
        minute = 0;
    }

    if(hour == 17 && minute == 0){
        let total = 0;
        let harga = 0;
        let s = "Status\n";
        
        harga = 100 * turnip;
        if(turnip != 0){
            s += "Turnip x " + turnip + " = " + harga + "\n";
        }
        turnip = 0;
        total += harga;
        
        harga = 150 * potato;
        if(potato != 0){
            s += "Potato x " + potato + " = " + harga + "\n";
        }
        potato = 0;
        total += harga;

        harga = 200 * tomato;
        if(tomato != 0){
            s += "Tomato x " + tomato + " = " + harga + "\n";
        }
        tomato = 0;
        total += harga;

        harga = 300 * corn;
        if(corn != 0){
            s += "Corn x " + corn + " = " + harga + "\n";
        }
        corn = 0;
        total += harga;
        s += "Total : " + total;
        if(total != 0){
            alert(s);
        }
        money += total;
    }

    if(hour == 24){
        hour = 0;
        day++;
        day += "";
        for(var i =0; i < 100; i ++){
            let ini = $(`#isi${i}`);
            if(ini.hasClass("kosong")){
                let persen = Math.floor(Math.random() * 101);
                // console.log(i + " - " + persen)
                if(persen <= 5){
                    ini.removeClass("kosong");
                    ini.addClass("bush");
                    ini.fadeIn("fast");
                }
            }
            else if(ini.hasClass("corn1w")){
                ini.removeClass("corn1w");
                ini.addClass("corn2");
            }
            else if(ini.hasClass("corn2w")){
                ini.removeClass("corn2w");
                ini.addClass("ripecorn");
            }
            else if(ini.hasClass("potato1w")){
                ini.removeClass("potato1w");
                ini.addClass("ripepotato");
            }
            else if(ini.hasClass("tomato1w")){
                ini.removeClass("tomato1w");
                ini.addClass("tomato2");
            }
            else if(ini.hasClass("tomato2w")){
                ini.removeClass("tomato2w");
                ini.addClass("ripetomato");
            }
            else if(ini.hasClass("turnip1w")){
                ini.removeClass("turnip1w");
                ini.addClass("ripeturnip");
            }
            else if(ini.hasClass("seedw")){
                ini.removeClass("seedw");
                if(ini.attr("jenis") == "turnip"){
                    ini.addClass("turnip1");
                    ini.removeAttr("jenis");
                }
                else if(ini.attr("jenis") == "potato"){
                    ini.addClass("potato1");
                    ini.removeAttr("jenis");
                }
                else if(ini.attr("jenis") == "tomato"){
                    ini.addClass("tomato1");
                    ini.removeAttr("jenis");
                }
                else if(ini.attr("jenis") == "corn"){
                    ini.addClass("corn1");
                    ini.removeAttr("jenis");
                }
            }
        }
        
        
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(hour >= 0 && hour < 12){
        period = "AM";
    }
    else if(hour >= 12 && hour <= 24){
        period = "PM";
    }
    
    $("#status").html(`DAY : ${day} | $ : ${money} <br>${hour} : ${minute} ${period}`)
}

$(document).ready(function(){
    $(document).keydown(function(e){
        // console.log(e);
        if(e.key == 'q' || e.key == 'Q'){
            minute = 59;
            hour = 23;
        }
        else if(e.key == 'w' || e.key == 'W'){
            minute = 0;
            hour = 16;
        }
        else if(e.key == 'e' || e.key == 'E'){
            money += 500;
        }
    });

    setInterval(changeTime, 100);

    for(var i = 0 ; i < 100; i++){
        $(".map").append(`
        <div class="tile"><div class="isi kosong" id="isi${i}"></div></div>
        `)
    }

    // $("#isi5").attr("class", "isi");
    // $("#isi5").addClass("ripeturnip");

    // $("#isi8").attr("class", "isi");
    // $("#isi8").addClass("ripecorn");

    // $("#isi15").attr("class", "isi");
    // $("#isi15").addClass("seed");
    // $("#isi15").attr("jenis", "turnip");

    $(".isi").click(function(){
        var ini = $(this);
        if(kursor == "Hoe"){
            if(ini.hasClass("kosong")){
                ini.removeClass("kosong");
                ini.addClass("hoed");
                ini.fadeIn("fast");
            }
        }
        else if(kursor=="Scythe"){
            if(ini.hasClass("bush")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("bush");
                    ini.addClass("kosong");
                });
                
            }
        }
        else if(kursor == "Shovel"){
            if(ini.hasClass("ripeturnip")){
                ini.fadeOut("fast", function(){
                    ini.removeAttr('class');
                    ini.attr('class', '');
                    ini.addClass("isi");
                    ini.addClass("kosong");
                    turnip++;    
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("ripepotato")){
                ini.fadeOut("fast", function(){
                    ini.removeAttr('class');
                    ini.attr('class', '');
                    ini.addClass("isi");
                    ini.addClass("kosong");
                    potato++;
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("ripecorn")){
                ini.fadeOut("fast", function(){
                    ini.removeAttr('class');
                    ini.attr('class', '');
                    ini.addClass("isi");
                    ini.addClass("corn2");
                    corn++;
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("ripetomato")){
                ini.fadeOut("fast", function(){
                    ini.removeAttr('class');
                    ini.attr('class', '');
                    ini.addClass("isi");
                    ini.addClass("tomato2");
                    tomato++;
                    ini.fadeIn("fast");
                });
            }
        }
        else if(kursor == "Water"){
            if(ini.hasClass("corn1")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("corn1");
                    ini.addClass("corn1w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("corn2")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("corn2");
                    ini.addClass("corn2w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("potato1")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("potato1");
                    ini.addClass("potato1w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("tomato1")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("tomato1");
                    ini.addClass("tomato1w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("tomato2")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("tomato2");
                    ini.addClass("tomato2w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("turnip1")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("turnip1");
                    ini.addClass("turnip1w");
                    ini.fadeIn("fast");
                });
            }
            else if(ini.hasClass("seed")){
                ini.fadeOut("fast", function(){
                    ini.removeClass("seed");
                    ini.addClass("seedw");
                    ini.fadeIn("fast");
                });
            }
        }
        else if(tanam != ""){
            if(ini.hasClass("hoed")){
                ini.removeClass("hoed");
                ini.addClass("seed");
                ini.attr("jenis", tanam);
                tanam = "";
                ini.fadeIn("fast");
            }
        }
    });

    $("#scythe").click(function(){
        $(".container").css("cursor", "url('asset/img/scythe.png'), pointer");
        kursor = "Scythe";
    });
    
    $("#hoe").click(function(){
        $(".container").css("cursor", "url('asset/img/hoe.png'), pointer");
        kursor = "Hoe";
    });
    
    $("#shovel").click(function(){
        $(".container").css("cursor", "url('asset/img/shovel.png'), pointer");
        kursor = "Shovel";
    });

    $("#water").click(function(){
        $(".container").css("cursor", "url('asset/img/watering-can.png'), pointer");
        kursor = "Water";
    });

    $(".clear").click(function(){
        $(".container").css("cursor", "");
        kursor = "Normal"
    })

    $("#btnBuy").click(function(){
        $(".bag").css("display", "none");
        $("#tabs").css("display", "block");
    });

    $("#btnBag").click(function(){
        $("#tabs").css("display", "none");
        $(".bag").css("display", "block");
    });

    $("#btnClose").click(function(){
        $("#tabs").css("display", "none");
        $(".bag").css("display", "none");
    });

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    $("#tabs").tabs();
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#accordion-2").accordion({
        heightStyle: "content"
    });

    var spturnip = $( "#spinner-1" ).spinner();
    spturnip.spinner('option', 'min', 0);

    $("#spinner-1" ).change(function(){
        let n = $("#spinner-1").spinner("value");
        let h = n * 50;
        $("#nturnip").html(h);
    });

   

    $('#buyTurnip').click(function(){
        let n = $("#spinner-1").spinner("value") * 1;
        let h = n * 50;
        var beli = confirm(`Apa Anda yakin membeli Turnip sebanyak ${n} dengan total harga ${h}G?`);
        if(beli == true){
            if(money >= h){
                sturnip += n;
                money -= h;
                $("#bturnip").attr("amount", sturnip);
                $("#bturnip").html(`turnip x ${sturnip}`);
                $("#bturnip").insertBefore($("#sortable li:eq(0)"));
            }
            else{
                alert("Uang anda tidak cukup!");
            }
        }
    });

    var sppotato = $( "#spinner-2" ).spinner();
    sppotato.spinner('option', 'min', 0);

    $("#spinner-2" ).change(function(){
        let n = $("#spinner-2").spinner("value");
        let h = n * 100;
        $("#npotato").html(h);
    });
    
    $('#buyPotato').click(function(){
        let n = $("#spinner-2").spinner("value") * 1;
        let h = n * 100;
        var beli = confirm(`Apa Anda yakin membeli Potato sebanyak ${n} dengan total harga ${h}G?`);
        if(beli == true){
            if(money >= h){
                spotato += n;
                money -= h;
                $("#bpotato").attr("amount", spotato);
                $("#bpotato").html(`potato x ${spotato}`);
                $("#bpotato").insertBefore($("#sortable li:eq(0)"));
            }
            else{
                alert("Uang anda tidak cukup!");
            }
        }
    });

    var spcorn = $( "#spinner-3" ).spinner();
    spcorn.spinner('option', 'min', 0);

    $("#spinner-3" ).change(function(){
        let n = $("#spinner-3").spinner("value");
        let h = n * 125;
        $("#ncorn").html(h);
    });
    
    $('#buyCorn').click(function(){
        let n = $("#spinner-3").spinner("value") * 1;
        let h = n * 125;
        var beli = confirm(`Apa Anda yakin membeli Corn sebanyak ${n} dengan total harga ${h}G?`);
        if(beli == true){
            if(money >= h){
                scorn += n;
                money -= h;
                $("#bcorn").attr("amount", scorn);
                $("#bcorn").html(`corn x ${scorn}`);
                $("#bcorn").insertBefore($("#sortable li:eq(0)"));
            }
            else{
                alert("Uang anda tidak cukup!");
            }
        }
    });

    var sptomato = $( "#spinner-4" ).spinner();
    sptomato.spinner('option', 'min', 0);

    $("#spinner-4" ).change(function(){
        let n = $("#spinner-4").spinner("value");
        let h = n * 150;
        $("#ntomato").html(h);
    });
    
    $('#buyTomato').click(function(){
        let n = $("#spinner-4").spinner("value") * 1;
        let h = n * 150;
        var beli = confirm(`Apa Anda yakin membeli Tomato sebanyak ${n} dengan total harga ${h}G?`);
        if(beli == true){
            if(money >= h){
                stomato += n;
                money -= h;
                $("#btomato").attr("amount", stomato);
                $("#btomato").html(`tomato x ${stomato}`);
                $("#btomato").insertBefore($("#sortable li:eq(0)"));
            }
            else{
                alert("Uang anda tidak cukup!");
            }
        }
    });

    $('.ui-spinner-button').click(function(){
        $(this).siblings('input').change();
    })

    var tanam = "";
    $('#btnPlant').click(function(){
        $(".clear").click();
        if(tanam == ""){
            var atas = $("#sortable li:eq(0)");
            var id = atas.attr('id');
            if(id == "bturnip"){
                tanam = "turnip";
            }
            else if(id == "bpotato"){
                tanam = "potato";
            }
            else if(id == "bcorn"){
                tanam = "corn";
            }
            else if(id == "btomato"){
                tanam = "tomato";
            }
            var amount = atas.attr("amount");
            if(amount > 0){
                amount--;
                atas.attr("amount", amount);
                atas.html(`${tanam} x ${amount}`);
                if(tanam == "turnip"){
                    sturnip--;
                }
                else if(tanam == "potato"){
                    spotato--;
                }
                else if(tanam == "corn"){
                    scorn--;
                }
                else if(tanam == "tomato"){
                    stomato--;
                }
            }
            else{
                alert("biji " + tanam + " habis");
                tanam = "";
            }
        }
    })
});