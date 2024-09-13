links:
https://www.letsdevops.net/post/letsdevops-gitlab-to-trigger-pipeline-from-another-pipeline-setup-parent-child-pipeline


other info:
GitLab CI/CD

***On server side
- create a runner or install GitLab runner on the deploy machine
   read GitLab documentation 
- install nodejs but not using nvm or other node version manages
  this link works for me: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04
- that if you want to install a particular version of nodejs because the default version is very old and maybe it will not fit your expectation
- for permission errors is a better way to use:
	echo "$RA_SERVICE" |  sudo  -S  systemctl restart raiseawayserver.service
	where $RA_SERVICE is a variable defined in CI/CD settings that contains the password for sudo
- install gitlab-runner
- follow the instructions from: https://docs.gitlab.com/runner/install/linux-repository.html