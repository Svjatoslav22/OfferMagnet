module.exports = {
  apps: [
    {
      name: "offermagnet-worker",
      script: "src/run-bot.ts",
      interpreter: "node_modules/.bin/tsx",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1200M",
      restart_delay: 5000,
      kill_timeout: 10000,
      env: {
        NODE_ENV: "production",
      },
      time: true,
      error_file: "logs/worker-error.log",
      out_file: "logs/worker-out.log",
      merge_logs: true,
    },
  ],
};
