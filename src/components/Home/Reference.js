import '../../App.css'
import shopkeeper from '../../images/Shopkeeper.jpg'

const Reference = () => {
    return (
        <div className="fullscreen">
            <h2 className="d-flex justify-content-center py-5 lh-1 mb-3 font-58">Those who work with us</h2>

            <div className="d-flex justify-content-center">
                
                <div className="card w-50 border-0">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center">
                        <img src= { shopkeeper } className="img-fluid" width="700" height="500" alt="..."/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text font-italic"><em>This is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</em></p>
                            <p className="card-text"><small class="text-muted">David Collins</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
      </div>
    )
}

export default Reference;