const core = require('@actions/core');
const github = require('@actions/github');

try {
	const { pull_request } = github.context.payload;

	if (pull_request?.head?.ref) {
		const { ref } = pull_request.head;
		const clickUpBranchName = /PP\-[0-9]+\_.+/gi

		if (clickUpBranchName.test(ref)) {
			core.info("ClickUp branch detected! Good job :D");
		}
		else {
			core.setFailed("Please use a ClickUp branch!");
		}
	}
	else {
		core.info("No pull request reference found -- skipping check")
	}
} catch (error) {
	core.setFailed(error.message);
}
