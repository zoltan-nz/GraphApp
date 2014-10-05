require 'pry'
require 'dotenv'
Dotenv.load

server=ENV['FTP_HOST']
user=ENV['FTP_USER']
password=ENV['FTP_PASSWORD']

lftp_string="set ftp:list-options -a; open ftp://#{user}:#{password}@#{server}; mirror --reverse --delete --use-cache --verbose --allow-chown --allow-suid --no-umask --parallel=2"

task :default do
  sh "cd GraphApp && ember build --environment=production && cd dist && lftp -c '#{lftp_string}'"
end

