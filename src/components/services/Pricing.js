import '../../App.css'

const Pricing = () => {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />

<section class="section" id="pricing">
    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <div class="title-box text-center">
                    <h3 class="title-heading mt-4">Best Pricing Package </h3>
                    <p class="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                        elementum mauris
                        sit amet arcu <br/> fringilla auctor In eleifend maximus nisi sed vulputate.</p>

                    <img src="images/home-border.png" height="15" class="mt-3" alt=""/>
                </div>
            </div>
        </div>


        <div class="row mt-5 pt-4">
            <div class="col-lg-4">
                <div class="pricing-box mt-4">
                    <i class="mdi mdi-account h1"></i>
                    <h4 class="f-20">Starter</h4>

                    <div class="mt-4 pt-2">
                        <p class="mb-2 f-18">Features</p>

                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                            Target Audience</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                            User Account</p>
                        <p class="mb-2"><i class="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>100+</b>
                            Video Tuts</p>
                        <p class="mb-2"><i class="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>Public</b>
                            Displays
                        </p>
                    </div>

                    <p class="mt-4 pt-2 text-muted">Semper urna veal tempus pharetra elit habisse platea dictumst.
                    </p>
                    <div class="pricing-plan mt-4 pt-2">
                        <h4 class="text-muted"><s> $9.99</s> <span class="plan pl-3 text-dark">$8.99 </span></h4>
                        <p class="text-muted mb-0">Per Month</p>
                    </div>


                    <div class="mt-4 pt-3">
                        <a href="" class="btn btn-primary btn-rounded">Purchase Now</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="pricing-box mt-4">
                    <div class="pricing-badge">
                        <span class="badge">Featured</span>
                    </div>

                    <i class="mdi mdi-account-multiple h1 text-primary"></i>
                    <h4 class="f-20 text-primary">Personal</h4>


                    <div class="mt-4 pt-2">
                        <p class="mb-2 f-18">Features</p>

                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                            Target Audience</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                            User Account</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>100+</b>
                            Video Tuts</p>
                        <p class="mb-2"><i class="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>Public</b>
                            Displays
                        </p>
                    </div>

                    <p class="mt-4 pt-2 text-muted">Semper urna veal tempus pharetra elit habisse platea dictumst.
                    </p>

                    <div class="pricing-plan mt-4 pt-2">
                        <h4 class="text-muted"><s> $19.99</s> <span class="plan pl-3 text-dark">$18.99 </span></h4>
                        <p class="text-muted mb-0">Per Month</p>
                    </div>

                    <div class="mt-4 pt-3">
                        <a href="" class="btn btn-primary btn-rounded">Purchase Now</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="pricing-box mt-4">
                    <i class="mdi mdi-account-multiple-plus h1"></i>
                    <h4 class="f-20">Ultimate</h4>


                    <div class="mt-4 pt-2">
                        <p class="mb-2 f-18">Features</p>

                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                            Target Audience</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                            User Account</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>100+</b>
                            Video Tuts</p>
                        <p class="mb-2"><i class="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Public</b>
                            Displays
                        </p>
                    </div>

                    <p class="mt-4 pt-2 text-muted">Semper urna veal tempus pharetra elit habisse platea dictumst.
                    </p>

                    <div class="pricing-plan mt-4 pt-2">
                        <h4 class="text-muted"><s> $29.99</s> <span class="plan pl-3 text-dark">$28.99 </span></h4>
                        <p class="text-muted mb-0">Per Month</p>
                    </div>

                    <div class="mt-4 pt-3">
                        <a href="" class="btn btn-primary btn-rounded">Purchase Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                    </div>
    )
}



export default Pricing;