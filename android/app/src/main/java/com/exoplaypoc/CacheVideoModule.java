package com.rnnativemodulesdemo;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CacheVideoModule extends ReactContextBaseJavaModule {
    CacheVideoModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CacheVideoModule";
    }

    @ReactMethod
    public void createCacheVideoModule(String name, String location) {
        Log.d("CacheVideoModule", "Create event called with name: " + name
                + " and location: " + location);
    }
}