<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>TCS_Smoke_Test_2</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>SEQUENTIAL</executionMode>
   <maxConcurrentInstances>8</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudMobileDevice</key>
                  <value>{
  &quot;capability&quot;: {
    &quot;availability&quot;: &quot;HIGH&quot;
  },
  &quot;id&quot;: &quot;any_android_phone&quot;,
  &quot;isTablet&quot;: false,
  &quot;mobileDeviceId&quot;: &quot;any_android_phone_14&quot;,
  &quot;name&quot;: &quot;Any Phone&quot;,
  &quot;displayName&quot;: &quot;Any Phone&quot;,
  &quot;osVersion&quot;: &quot;14&quot;,
  &quot;os&quot;: &quot;Android&quot;,
  &quot;platformName&quot;: &quot;ANDROID&quot;,
  &quot;timeout&quot;: 15,
  &quot;usingTunnel&quot;: false,
  &quot;isHighAvailableDevice&quot;: true
}</value>
               </entry>
               <entry>
                  <key>testCloudSessionType</key>
                  <value>MOBILE_NATIVE</value>
               </entry>
               <entry>
                  <key>testCloudOverrideMobileApplication</key>
                  <value>{&quot;id&quot;:&quot;15385d23-e460-4a2d-8fdc-6ac1286a01e8&quot;,&quot;organizationId&quot;:&quot;1761048&quot;,&quot;name&quot;:&quot;API Demos&quot;,&quot;platform&quot;:&quot;ANDROID&quot;,&quot;status&quot;:&quot;READY&quot;,&quot;size&quot;:5049398,&quot;storagePath&quot;:&quot;6a438711-92c3-454a-86e7-c21b4a5d5ecf&quot;,&quot;uploadedDate&quot;:&quot;2025-02-26T16:03:22.695691&quot;,&quot;createdDate&quot;:&quot;2025-02-26T16:03:22.695691&quot;,&quot;updatedDate&quot;:&quot;2025-02-26T16:03:26.291819&quot;,&quot;fileName&quot;:&quot;APIDemos.apk&quot;,&quot;metadata&quot;:{&quot;identifier&quot;:&quot;io.appium.android.apis&quot;,&quot;name&quot;:&quot;API Demos&quot;,&quot;version&quot;:&quot;4.1.1&quot;}}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/TS_Smoke_Test_1</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
