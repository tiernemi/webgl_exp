function webGLStart() {
    var canvas = document.getElementById("glcanvas");
    initGL(canvas);
    initShaders();
    initBuffers();
	initTexture();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    tick();
}

