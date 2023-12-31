package main

import (
	"fmt"
	"net/http"

	"chitchat3.0/pkg/setting"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.GET("/test", func(c *gin.Context) {
		name := c.Query("name")
		fmt.Println("name=", name)
		c.JSON(200, gin.H{
			"message": "test",
		})
	})
	s := &http.Server{
		Addr:           fmt.Sprintf(":%d", setting.HTTPPort),
		Handler:        router,
		ReadTimeout:    setting.ReadTimeout,
		WriteTimeout:   setting.WriteTimeout,
		MaxHeaderBytes: 1 << 20,
	}
	s.ListenAndServe()
}
