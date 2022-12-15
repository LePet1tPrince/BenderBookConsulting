import React from 'react'


export default function Service(props) {
    const {img,
    title,
    desc
     } = props
  return (
    <div className="card services-card m-3 border-0 col-12 col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <div className="card-body">
            <img src={img} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Icon" width="50" height="50" loading="lazy"/>
            <h5 className="card-title bold font-28">{title}</h5>
            <p className="card-text font-20">{desc}</p>
        </div>
    </div>
  )
}
