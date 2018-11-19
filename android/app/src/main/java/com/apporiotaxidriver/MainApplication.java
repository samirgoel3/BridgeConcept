package com.apporiotaxidriver;

import android.app.Application;
import android.content.Context;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;

import net.mischneider.MSREventBridgeInstanceManagerProvider;
import net.mischneider.MSREventBridgeModule;
import net.mischneider.MSREventBridgePackage;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.onesignal.OneSignal;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  public static Context mContext;


  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
            new SvgPackage(),
            new MSREventBridgePackage(),
            new VectorIconsPackage(),
              new ReactNativeOneSignalPackage(),
              new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    mContext = this;
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    OneSignal.sendTag("MTG","ljejeorfoerjferofj");
  }

}
