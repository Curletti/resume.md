let resume;

function displayHeader() {
    $('#initials').html(resume.initials);
    $('#fullname').html(resume.fullname);
    $('#description').html(resume.description);
}

function displaySections() {
    
    
    // display section names 
    $('.section:eq(0)').html(resume.sections[0].sectionNames[0]);
    $('.section:eq(1)').html(resume.sections[0].sectionNames[1]);
    $('.section:eq(2)').html(resume.sections[0].sectionNames[2]);
    $('.section:eq(3)').html(resume.sections[0].sectionNames[3]);

    // Skills/Hobbies details
    $('.details:eq(0)').html(resume.sections[0].skills);
    $('.details:eq(1)').html(resume.sections[0].hobbies);

    // Employer info
    $('.employer:eq(0)').html(resume.sections[0].experiences[0].employer);
    $('.employer:eq(1)').html(resume.sections[0].experiences[1].employer);
    $('.employer:eq(2)').html(resume.sections[0].experiences[2].employer);

    // Employer/Uni decriptions
    $('.details:eq(2)').html(resume.sections[0].experiences[0].duties);
    $('.details:eq(3)').html(resume.sections[0].experiences[1].duties);
    $('.details:eq(4)').html(resume.sections[0].experiences[2].duties);
    $('.details:eq(5)').html(resume.sections[0].universities[0].achievements);
    $('.employer:eq(3)').html(resume.sections[0].universities[0].school);

}

function displayFromJson() {
    displayHeader();
    displaySections();
}

// Toggle all sections by clicking <h2> hiding next div.
$(document).ready(function () {
    var $contents = $('.content').hide();
    $('h2').click(function () {
        var $next = $(this).next('div').stop(true, true).toggle();
        $contents.not($next).hide();
    });
    $('.expand').click(function () {
        $contents.stop(true, true).slideDown()
    })
    $('.contract').click(function () {
        $contents.stop(true, true).slideUp()
    });
})

// AJAXing from resume.json
$( document ).ready(function() {
    // use jQuery to ajax the jsonfile
    $.getJSON( 'resume.json', function( resumeData ) {
      resume = resumeData;
      displayFromJson();
    });
  });
