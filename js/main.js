(function($) {
  $(function() {

    function tokenize_to_dropdown_val(d){
      return d.toLowerCase().replace(/ /g,"-");
    }
    state_options = $("#contact-states");
    ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
    .forEach(function(d){
      state_options.append('<option value="'+ tokenize_to_dropdown_val(d) +'">' + d + '</option>');
    });
    state_options.change(function(d){
      console.log(this.value)
      $("#state-contact-link").attr("href", "http://www.census.gov/about/partners/sdc/member-network/"+this.value+".html");
    })


    /* Track when Learn More is clicked for each tool */
    $('#connect').on('click', '.ood-gallery-item a', function(event) {
      var toolName = $(this).closest('.ood-gallery-item').find('header').text().trim();
      ga('send', 'event', 'opportunity', 'click', toolName);
    });

    /* Helper to get the hostname of a URL */
    function getHostname(url) {
      var a = document.createElement('a');
      a.href = url;
      return $(a).prop('hostnme');
    }

    /* Show alert when leaving a .gov domain. */
    function alertLeavingUsg(e, newHostname) {
      //if (!newHostname.match(/\.gov$/)) {
      //  if (confirm('You are about to leave this web site for a destination ' +
      //              'outside of the Federal Government. You may wish to ' +
      //              'review each privacy notice since their information ' +
      //              'collection practices may differ from ours. In addition, ' +
      //              'our linking to these sites does not constitute an ' +
      //              'endorsement of any products or services.\n\n' +
      //              'Click OK if you wish to continue to the web site, ' +
      //              'otherwise click Cancel to return to our site.')) {
      //    // consinue
      //  } else {
      //    e.preventDefault();
      //  }
      //}
    }

    $('a').click(function(e) {
      alertLeavingUsg(e, $(this).prop('hostname'));
    });
    $('form').submit(function(e) {
      alertLeavingUsg(e, getHostname($(this).prop('action')));
    });

    $(".contact-filter").find("input").change(function() {

      $("."+this.value).toggleClass("hide")
    })


  });
})(jQuery);
