import React from 'react'

function WhyUsCard(props) {
  const {
    title,
    img,
    desc
   } = props

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
        <div class="card text-white border-0 m-3">
              <img src={img} class="card-img rounded-5" alt="Shopkeeper" width="500" height="400"/>
              <div class="card-img-overlay hover-appear rounded-5">
                  <h5 class="card-title font-40 bold px-4">{title}</h5>
                  <p class="card-text font-20 px-4">{desc}</p>
              </div>
          </div>
    </div>
    </div>
  )
}


export default WhyUsCard