package com.mood_tracker;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /* 
    * React Native Screen requires one additional configuration step to properly work on Android devices
  
  */
  @Override
  protected void onCreate(Bundle savedInstanceState){
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "mood_tracker";
  }
}
