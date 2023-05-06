import PropTypes from 'prop-types';

function IndicatorProgress({ percentage }) {
  const circleRadius = 25;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r={circleRadius}
        stroke="blue"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circleCircumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="10">
        {`${percentage}%`}
      </text>
    </svg>
  );
}

IndicatorProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default IndicatorProgress;
