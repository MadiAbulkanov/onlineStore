import { reviews } from '../../../helpers';
import { Review } from './Review/Review';
import './ReviewsBlock.scss';


export const ReviewsBlock = () => {
    return (
        <div className="reviews-block">
            <h1 className="reviews-block-title">Отзывы</h1>
            <div className="reviews">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
        </div>
    )
};