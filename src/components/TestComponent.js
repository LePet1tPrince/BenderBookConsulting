
import shopkeeper from '../images/Shopkeeper.jpg'


const TestComponent = () => {
  

    return (
        <div className="fullscreen">
            <div class="container d-flex align-items-center justify-content-center flex-wrap">
        <div class="box">
            
            <div class="body">
                <div class="imgContainer">
                    <img src={shopkeeper} alt="" />
                </div>

                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                <h1>SOmething here</h1>
                        <h3 class="text-white fs-5">Post Title</h3>
                        <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-white fs-5">Post Title</h3>
                        <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-white fs-5">Post Title</h3>
                        <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default TestComponent;