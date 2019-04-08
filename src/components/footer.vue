<template>

  <b-container fluid class="p-0">
    <div class="footer-containt" >
      <b-row>
        <b-col md="12">
          <b-row>
            <b-col md="10" class="mx-auto">
              <div class="text-left">
                <b-row>
                  <b-col md="3">
                    <div>
                      <img src="../assets/images/logo.png" class="footer-down-logo"/>
                    </div>
                    <div class="pb-3 pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco
                    </div>
                    <div class="pb-5">
                        <b-button  class=" img-fluid rounded-circle m-1 facebook-width " ><font-awesome-icon :icon="['fab','facebook-f']"/></b-button>
                        <b-button  class=" img-fluid rounded-circle m-1" ><font-awesome-icon :icon="['fab','twitter']"/></b-button>
                        <b-button  class=" img-fluid rounded-circle m-1" ><font-awesome-icon :icon="['fab','google']"/></b-button>
                        <b-button  class=" img-fluid rounded-circle m-1 facebook-width" ><font-awesome-icon :icon="['fab','pinterest-p']"/></b-button>
                    </div>
                  </b-col>
                  <b-col md="3">
                    <div class="footer-heading">
                      <strong>Custom Services</strong>
                    </div>
                    <div class="custom-service font-cus-ser pt-3 ">
                      <li class="p-2 ">
                        <a href="#" class="font-cus-ser">Help &#038; Contact</a>
                      </li>
                      <li class="p-2">
                        <a href="#" class="font-cus-ser">Return Policy</a>
                      </li>
                      <li class="p-2">
                        <a href="#" class="font-cus-ser">Feed Back</a>
                      </li>
                      <li class="p-2">
                        <a href="#" class="font-cus-ser">Careers</a>
                      </li>
                    </div>
                  </b-col>
                  <b-col md="3">
                    <div class="footer-heading">
                      <strong >Recent Posts</strong>
                    </div>
                    <div class="pt-3">Doctor Strange assembles with the Avengers</div>
                    <div class="dec-color mb-4">December 20,2016</div>
                    <div>5 Movies to watch this week (29 sep 2016)</div>
                    <div class="dec-color">December 20,2016</div>
                  </b-col>
                  <b-col md="3">
                    <div>
                      <strong class="footer-heading">Contact Us</strong>
                    </div>
                    <div class="pt-3 mb-2" ><font-awesome-icon :icon="['fab','telegram-plane']"/>  9067 Zurich, Switzerland 87</div>
                    <div class="mb-2"><font-awesome-icon :icon="['fas','envelope']"/>  abc@gmail.com</div>
                    <div class="mb-2 phone-text-color"><font-awesome-icon :icon="['fas','phone']"/>  01-234-5678</div>
                    <div class="email-icon">
                        <input type="email" placeholder="your email address"  class="input-email pl-3" />
                        <input type="submit" value="email">
                    </div>
                    
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
     <div class="footer-below-content">
      <b-row>
        <b-col md="12">
          <b-row>
            <b-col md="10" class="mx-auto">
              <div class="text-left ">
                <b-row>
                  <b-col md="6">
                      <div>© copyright 2017 Moviak</div>

                  </b-col>

                  <b-col md="6" class="text-right">
                      <div>Privacy  Policy Terms of Us  Site map
                          </div>
                      </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      </div>
  
    </div>
  </b-container>
 
</template>



<style lang="scss">
.custom-service {
  list-style-type: none;
}
.footer-containt {
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
  url("../assets/images/foooter.jpg");
  background-size: cover;
  padding-top: 50px;
  color: #bdbdbd;
  font-size: 12px;
}
.footer-below-content
{
    background-color:black;
    height: 54px;
    line-height: 54px;
}
.facebook-width
{
width: 40px;
}
.footer-heading
{
    font-size: 20px;
    color: #fff;
}
.btn:focus
{
    outline: none;
}
.footer-down-logo
{
    height: 40px;
}
.dec-color
{
 color: #615f5f;   
}
.font-cus-ser
{
    color: #bdbdbd !important;
    text-decoration: none !important;
}
.input-email
{
    background:rgba(255, 255, 255, 0.3) none repeat scroll 0 0;
    height: 32px;
    width: 180px;
    border:none;
}
.phone-text-color
{
    color: #fe7900;
}
.email-icon input[type="submit"] {
    background: rgba(0, 0, 0, 0) url(../assets/images/emailicon.png)no-repeat scroll 0 0;
        border: medium none;
    height: 24px;
 
}
</style>