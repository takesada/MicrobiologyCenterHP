package main

import (
	"net/http"
	"new_information/hello"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", hello.Hello)
	http.ListenAndServe(":8081", r)
}
