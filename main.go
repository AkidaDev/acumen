package main

import (
	_ "botsolve.com/acumen/routers"
	"github.com/astaxie/beego"
)

func init() {
	//	orm.RegisterDataBase("default", "mysql", "root:0000@tcp(127.0.0.1:3306)/acumen")
}

func main() {
	beego.Run()
}
