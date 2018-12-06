function refreshForm(innerHTML) {
  const newReviewForm = document.getElementById('new_review');
  newReviewForm.innerHTML = innerHTML;
}

function addReview(reviewHTML) {
  const reviews = document.getElementById('reviews');
  reviews.insertAdjacentHTML('beforeend', reviewHTML);
}

<% if @review.errors.any? %>
  refreshForm('<%= j render "reviews/form", lesson: @lesson, review: @review %>');
<% else %>
  addReview('<%= j render "reviews/show", review: @review %>');
  refreshForm('<%= j render "reviews/form", lessons: @lesson, review: Review.new %>');
<% end %>
