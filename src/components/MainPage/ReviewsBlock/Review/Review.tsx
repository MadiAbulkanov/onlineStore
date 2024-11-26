import { ReviewProps } from '../../../../interfaces/IReview.interface';
import './Review.scss';

export const Review = ({ review }: { review: ReviewProps }) => {
    return (
        <div className="review-card">
            <p className="review-text">«{review.reviewText}»</p>
            <p className="review-author">- {review.reviewAuthor} -</p>
        </div>
    )
};