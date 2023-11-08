$(document).ready()

  $(function() {
    $('#submit-btn').click(() => {
      let x = $('input[name="name"]').val();
      let rating = parseFloat($('input[name="rating"]').val());
      if (x === '') {
        alert("Please enter a movie name.");
        return;
      }
      if (x.length < 2) {
        alert("Title must be over two characters.");
        return;
      }

      if (isNaN(rating) || rating < 0 || rating > 10) {
        alert("Rating must be a number between 0 and 10.");
        return;
      }

      let listItem = `<li>${x} - ${rating} <button class = "remove-btn ">Remove</button></li>`;
      $('.list ul').append(listItem);
  
      $('.remove-btn').click(function() {
        $(this).closest('li').remove();

      });
    });
    $('#sort-btn').click(() => {
        let listItems = $('.list ul li').get();
        listItems.sort(function(a, b) {
            return $(a).text().localeCompare($(b).text());
        });
        $('.list ul').empty().append(listItems);
    });
    $('#sort-btn2').click(() => {
        let listItems = $('.list ul li').get();
        listItems.sort(function(a, b) {
            let ratingA = parseFloat($(a).text().split('-')[1].trim());
            let ratingB = parseFloat($(b).text().split('-')[1].trim());
            return ratingA - ratingB;
        });
        $('.list ul').empty().append(listItems);
    });
  });