package arquitetura

import (
	"runtime"
	"testing"
)

func TestDependente(t *testing.T) {

	if runtime.GOARCH == "amd64" {
		t.Skip("Não funciona na arquitetura amd64")
	}

	// ...

	t.Fail()
}
