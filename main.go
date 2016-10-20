package main

import (
	_ "botsolve.com/acumen/routers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

func init() {
	//	orm.RegisterDataBase("default", "mysql", "root:0000@tcp(127.0.0.1:3306)/acumen")
}

func main() {
	// // Database alias.
	// name := "default"

	// // Drop table and re-create.
	// force := false

	// // Print log.
	// verbose := true

	// // Error.
	// err := orm.RunSyncdb(name, force, verbose)
	// if err != nil {
	// 	fmt.Println(err)
	// }
	beego.SetStaticPath("/css", "static/css")
	beego.SetStaticPath("/fonts", "static/fonts")
	beego.SetStaticPath("/img", "static/img")
	beego.SetStaticPath("/js", "static/js")
	beego.SetStaticPath("/plugins", "static/plugins")
	beego.SetStaticPath("/profile", "static/profile")

	orm.Debug = true
	orm.RunCommand()
	beego.Run()
}
