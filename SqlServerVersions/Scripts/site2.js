﻿function isDateValid(dateInput) {
    var dateRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
    return dateRegex.test(dateInput);
}

$(document).ready(function () {
    $("#input-friendlynamelong").keyup(function () {
        $("#repeat-friendlynamelong").text($(this).val());
    });

    $("#input-friendlynameshort").keyup(function () {
        $("#repeat-friendlynameshort").text($(this).val());
    });

    $("#input-releasedate").change(function () {
        var releaseDateInput = $(this).val();

        if (!releaseDateInput.trim()) {
            $("#repeat-releasedate").text("");
            $(".date-error").css("visibility", "hidden");
        }
        else {
            if (isDateValid(releaseDateInput)) {
                $(".date-error").css("visibility", "hidden");
                $("#repeat-releasedate").text(releaseDateInput);
            }
            else {
                $("#repeat-releasedate").text("");
                $(".date-error").css("visibility", "visible");
            }
        }
    });
});