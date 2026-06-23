#include "decoder.h"

NAN_METHOD(decodeJpegBuffer) {
    if (info.Length() < 2 || !info[0]->IsObject() || !info[1]->IsFunction()) {
        return Nan::ThrowError("Invalid arguments");
    }
    v8::Local<v8::Object> jpegBuff = info[0].As<v8::Object>();
    Nan::Callback * callback = new Nan::Callback(info[1].As<v8::Function>());

    Nan::AsyncQueueWorker(new DecodeBufferWorker(callback, jpegBuff, decode_jpeg_buffer));
}

NAN_METHOD(decodePngBuffer) {
    if (info.Length() < 2 || !info[0]->IsObject() || !info[1]->IsFunction()) {
        return Nan::ThrowError("Invalid arguments");
    }
    v8::Local<v8::Object> pngBuff = info[0].As<v8::Object>();
    Nan::Callback * callback = new Nan::Callback(info[1].As<v8::Function>());

    Nan::AsyncQueueWorker(new DecodeBufferWorker(callback, pngBuff, decode_png_buffer));
}

NAN_METHOD(decodeGifBuffer) {
    if (info.Length() < 2 || !info[0]->IsObject() || !info[1]->IsFunction()) {
        return Nan::ThrowError("Invalid arguments");
    }
    v8::Local<v8::Object> gifBuff = info[0].As<v8::Object>();
    Nan::Callback * callback = new Nan::Callback(info[1].As<v8::Function>());

    Nan::AsyncQueueWorker(new DecodeBufferWorker(callback, gifBuff, decode_gif_buffer));
}

// create an init function for our node module
NAN_MODULE_INIT(InitAll) {
    Nan::Export(target, "jpeg", decodeJpegBuffer);
    Nan::Export(target, "png", decodePngBuffer);
    Nan::Export(target, "gif", decodeGifBuffer);
}

// use NODE_MODULE macro to register our module:
NODE_MODULE(lwip_decoder, InitAll)
