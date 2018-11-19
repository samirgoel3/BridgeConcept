package com.apporiotaxidriver;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import net.mischneider.MSREventBridgeEventReceiver;
import net.mischneider.MSREventBridgeInstanceManagerProvider;
import net.mischneider.MSREventBridgeModule;
import net.mischneider.MSREventBridgeReceiverCallback;

public class MainActivity extends ReactActivity implements MSREventBridgeEventReceiver {

    private static final String MY_PREFS_NAME = "";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

                try{
                   startActivity(new Intent());
                }catch (Exception e){
                    Log.e("*******",""+e.getMessage());
                }

            }
        }, 4000);

    }

    @Override
    protected String getMainComponentName() {
        return "ApporioTaxiDriver";
    }

    @Override
    public void onEvent(String name, ReadableMap info) {
        MSREventBridgeInstanceManagerProvider instanceManagerProvider =
                (MSREventBridgeInstanceManagerProvider)this.getApplicationContext();

        WritableMap map = new WritableNativeMap();
        map.putString("eventName", name);
        MSREventBridgeModule.emitEventForActivity(this, instanceManagerProvider, "eventName", map);
    }

    @Override
    public void onEventCallback(String name, ReadableMap info, MSREventBridgeReceiverCallback callback) {
        WritableMap map = new WritableNativeMap();
        map.putString("key", "value");
        callback.onSuccess(map);
    }

//    @Override
//    protected ReactActivityDelegate createReactActivityDelegate() {
//        return new ReactActivityDelegate(this, getMainComponentName()) {
//            @Override
//            protected Bundle getLaunchOptions() {
//                Bundle initialProperties = new Bundle();
//                initialProperties.putString("var_1","Im the first var");
//                Log.d("MainActivity","Sending data to react native elements ");
//                return initialProperties;
//            }
//        };
//    }

}
