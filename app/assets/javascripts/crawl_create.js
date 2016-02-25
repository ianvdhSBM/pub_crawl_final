$(function() {
  if($("form.new_crawl").length > 0){
    var currentIndex = 1;
    var $barOne = $("input[name='bar_names[0]'");
    awesomplete = [];
    awesomplete.push(new Awesomplete($barOne.get(0), {
        minChars: 3,
        autoFirst: true
    }));
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
        console.log($addedInput);
        awesomplete.push(new Awesomplete($addedInput.get(0), {
            minChars: 3,
            autoFirst: true
        }));
        currentIndex++;
    });

    $("form").unbind("click").on("click", ".remove-bar", function() {
        $(this).closest(".form-group").remove();
    });

    $("body").on("keyup", "input:text[name*='bar_names']", function() {
            if ($(this).val().length > 1) {
                var name = $(this).attr("name");
                var num = name.match(/\d/g);
                $.ajax({
                        url: '/bars/autocomplete/' + this.value,
                        type: 'GET',
                        dataType: 'json'
                    })
                    .success(function(data) {
                        var list = [];
                        $.each(data, function(key, value) {
                            list.push(value);
                        });
                        awesomplete[Number(num)].list = list;
                    });

        }
    });

    $("input").on("awesomplete-selectcomplete", function(){
      console.log($(this));
    });
  }
});
