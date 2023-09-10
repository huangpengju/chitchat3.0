package setting

import (
	"log"
	"time"

	"gopkg.in/ini.v1"
)

var (
	Cfg *ini.File

	// 模式
	RunMode string

	// 服务
	HTTPPort     int
	ReadTimeout  time.Duration
	WriteTimeout time.Duration

	// JWT
	JwtSecret string
)

func init() {
	var err error
	Cfg, err = ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("打开“conf/app.ini”失败:%v\n", err)
	}

	// 加载运行模式
	LoadBase()
	// 加载服务
	LoadServer()
	// 加载JWT
	LoadApp()
}

// LoadBase() 加载运行模式
func LoadBase() {
	RunMode = Cfg.Section("").Key("RUN_MODE").MustString("debug")
}

func LoadServer() {
	sec, err := Cfg.GetSection("server")
	if err != nil {
		log.Fatalf("获取“server”分区失败：%v\n", err)
	}

	HTTPPort = sec.Key("HTTP_PORT").MustInt(80)
	ReadTimeout = time.Duration(sec.Key("READ_TIMEOUT").MustInt(60)) * time.Second
	WriteTimeout = time.Duration(sec.Key("WRITER_TIMEOUT").MustInt(60)) * time.Second
}

func LoadApp() {
	sec, err := Cfg.GetSection("app")
	if err != nil {
		log.Fatalf("获取“app”分区失败：%v\n", err)
	}
	JwtSecret = sec.Key("JWT_SECRET").MustString("!@)*#)!@U#@*!@!)")
}
