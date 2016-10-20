package routers

import (
	"botsolve.com/acumen/controllers"
	"github.com/astaxie/beego"
)

func init() {
	//admin.Run()
	beego.Router("/", &controllers.MainController{})
}
