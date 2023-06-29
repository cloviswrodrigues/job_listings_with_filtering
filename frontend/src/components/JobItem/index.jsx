import PropTypes from 'prop-types';

import ImageRounded from "../ImageRounded";

const JobItem = ({ data }) => {

  if (!data) return null
  return (
    <li className="bg-white p-7 rounded-md border-l-4 border-cyan-dark flex items-center gap-6">
      <div>
        <ImageRounded src={data.logo}/>
      </div>
      <div>
        {data.position}
      </div>
      <div>

      </div>
    </li>
  )
}

JobItem.propTypes = {
  data: PropTypes.shape().isRequired
}

export default JobItem
