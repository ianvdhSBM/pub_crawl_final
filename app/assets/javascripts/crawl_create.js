$(document).on("page:load", function() {
  loadForm();
});
$(document).on("ready", function() {
  loadForm();
});

var loadForm = function(){
  if ($("form.new_crawl").length > 0) {
    var currentIndex = 1;
    //DONT DELETE SHIT FROM HERE. SET IT TO NULL\/fvbgbg
    bars = [{
      name: "",
      id: null,
      lat: null,
      lng: null,
      list: []
    }];
    var $barOne = $("input[name='bar_names[0]'");
    awesomplete = [];
    awesomplete.push(new Awesomplete($barOne.get(0), {
      minChars: 2,
      autoFirst: false
    }));

    map = new GMaps({
      el: '#map',
      lat: 43.645425,
      lng: -79.395020,
      scrollwheel: false,
      zoom: 13
    });

    rerenderMarkers = function(){
      map.removeMarkers();
      map.cleanRoute();
      markers = [];
      bars.forEach(function(bar){
        if(bar !== null){
          markers.push({
            lat: bar.lat,
            lng: bar.lng
          });
        }
      });
      var waypoints = [];
      markers.forEach(function(marker, index){
        if(marker.lat !== null || marker.lng !== null){
          map.addMarker({
            lat: marker.lat,
            lng: marker.lng,
            label: (index + 1).toString()
          });
          waypoints.push({
            location: new google.maps.LatLng({
              lat: Number.parseFloat(marker.lat),
              lng: Number.parseFloat(marker.lng)
            })
          });
        }
      });

      map.drawRoute({
        origin: [markers[0].lat, markers[0].lng],
        destination: [Number.parseFloat(markers[markers.length - 1].lat), Number.parseFloat(markers[markers.length - 1].lng)],
        travelMode: "walking",
        waypoints: waypoints,
        strokeColor: "blue",
        strokeOpacity: 0.5,
        strokeWeight: 3
      });
    }

    $('.tags-select').multiselect();

    $("#add-bar").unbind("click").on("click", function() {
      var newFormGroupText = ["<div class='form-group'>",
        "<div class='input-group'>",
        "<input type='text' name='bar_names[" + currentIndex + "]' id='bar_names_" + currentIndex + "' class='form-control bar-names' placeholder='Bar Name' />" +
        "<span class='input-group-btn'><button class='btn btn-default remove-bar' type='button'>X</button></span>",
        "</div>"
      ].join("");

      var $newFormGroup = $(newFormGroupText);

      $(this).parent().before($newFormGroup);

      var $addedInput = $("input:text[name='bar_names[" + currentIndex + "]']");
      awesomplete.push(new Awesomplete($addedInput.get(0), {
        minChars: 3,
        autoFirst: false
      }));
      bars[currentIndex] = {
        name: "",
        id: null,
        lat: null,
        lng: null,
        list: []
      }
      currentIndex++;
    });

    $("form").unbind("click").on("click", ".remove-bar", function() {
      $input = $(this).closest(".form-group").find("input:text[name*='bar_names']");
      console.log($input);
      var name = $input.attr("name");
      var num = name.match(/\d/g);
      bars[num] = null;
      $(this).closest(".form-group").remove();
      rerenderMarkers();
    });

    $("body").on("keyup", "input:text[name*='bar_names']", function() {
      if ($(this).val().length > 2) {
        var name = $(this).attr("name");
        var num = name.match(/\d/g);
        bars[num].name = $(this).val();
        $.ajax({
            url: '/bars/autocomplete/' + this.value,
            type: 'GET',
            dataType: 'json'
          })
          .success(function(data) {
            var awesompleteList = [];
            var list = [];
            $.each(data, function(key, value) {
              awesompleteList.push(value["name"]);
              list.push({
                name: value["name"],
                id: value["id"]
              });
            });
            awesomplete[Number(num)].list = awesompleteList;
            bars[num].list = list;
          });

      }
    });

    $("body").on("awesomplete-selectcomplete", "input", function() {
      $(this).data("added", true);
      var name = $(this).attr("name");
      var num = name.match(/\d/g);
      barName = $(this).val();
      bars[num].name = barName;
      var bar = bars[num].list.filter(function(b){
        return b.name == barName;
      });
      $.ajax({
          url: '/bars/' + bar[0].id,
          type: 'GET',
          dataType: 'json'
        })
        .success(function(data) {
          bars[num].lat = data.bar.lat;
          bars[num].lng = data.bar.lng;
          console.log(bars);
          rerenderMarkers();
        });
    });
    $("input").on("awesomplete-open", function() {
      $(this).data("added", false);
    });
    $("form.new_crawl").on("submit", function(e) {
      $inputs = $("input:text");
      $inputs.each(function(){
        $(this).closest(".form-group").removeClass("has-error");
        if($(this).val() === ""){
          $(this).closest(".form-group").addClass("has-error");
          e.preventDefault();
        }
        if(/^bar_names\[\d+\]/.test($(this).attr("name"))){
          if(!$(this).data("added")){
            $(this).closest(".form-group").addClass("has-error");
            e.preventDefault();
          }
        }
      });
    });

  }
}
