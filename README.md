# macos-app-observer

Log front most application name.

## Settings

### launchctl

~/Library/LaunchAgents/your.plist
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>macos-app-observer</string>
    <key>Username</key>
    <string>koyachi</string>
    <key>ProgramArguments</key>
    <array>
      <string>/Users/koyachi/src/github.com/koyachi/macos-app-observer/frontmost_app_name_shebang.js</string>
    </array>
    <key>StartInterval</key>
    <integer>60</integer>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/koyachi/src/github.com/koyachi/macos-app-observer/logs/output.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/koyachi/src/github.com/koyachi/macos-app-observer/logs/error.log</string>
  </dict>
</plist>
```


### logrotate with newsyslog

/etc/newsyslog.d
```
# logfilename                                                             [owner:group]  mode count size when  flags [/pid_file] [sig_num]
/Users/koyachi/src/github.com/koyachi/macos-app-observer/logs/output.log  koyachi:staff  644  14     *    $D0   N
```

TODO: set `when` to appropriate time.

```
$ sudo newsyslog -nv
$ sudo newsyslog
```

# TODO

- [ ] detect
  - [ ] sleep
  - [ ] screen saver
  - [ ] power on
  - [ ] power off
- [ ] log format
- [x] output logfile
- [x] rotate logfile
- [ ] compress logfiles
- [ ] visualize logfiles
  - [ ] https://qiita.com/shin1ogawa/items/49a076f62e5f17f18fe5
  - [ ] https://qiita.com/howdy39/items/ca719537bba676dce1cf
