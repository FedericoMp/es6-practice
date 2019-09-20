import { SubsObservables } from './subscriptions/sub-observable';
import { SubsSubjects } from './subscriptions/sub-subjects';

export class ReactiveExtensions {

	constructor() {
		this.LoadSubsObservables();
		// this.LoadSubsSubjects();
	}

	LoadSubsObservables() {
		SubsObservables.subSample();
	}

	LoadSubsSubjects() {
		SubsSubjects.subSample();
		SubsSubjects.subObserverParams();
		SubsSubjects.subMulticast();
	}

}
